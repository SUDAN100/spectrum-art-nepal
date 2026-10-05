const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === 'extracted_files' || f === '.git') continue;
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (f.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles('.');
console.log('Found HTML files to audit:', htmlFiles.length);

let errors = 0;
const titles = new Set();
const descriptions = new Set();

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  // 1. Check H1
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`[H1 ERROR] in ${file}: found ${h1Matches.length} H1 tags`);
    errors++;
  }

  // 2. Check title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    console.error(`[TITLE ERROR] Missing title in ${file}`);
    errors++;
  } else {
    const t = titleMatch[1].trim();
    if (titles.has(t)) {
      console.warn(`[TITLE DUPLICATE] "${t}" in ${file}`);
    }
    titles.add(t);
  }

  // 3. Check meta description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (!descMatch) {
    console.error(`[DESC ERROR] Missing description in ${file}`);
    errors++;
  }

  // 4. Check canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonMatch) {
    console.error(`[CANONICAL ERROR] Missing canonical in ${file}`);
    errors++;
  }

  // 5. Check CSS & JS links
  const cssMatches = content.match(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi) || [];
  cssMatches.forEach(tag => {
    const m = tag.match(/href=["']([^"']+)["']/i);
    if (m && !m[1].startsWith('http')) {
      const target = path.resolve(dir, m[1]);
      if (!fs.existsSync(target)) {
        console.error(`[BROKEN CSS] in ${file}: ${m[1]} -> ${target}`);
        errors++;
      }
    }
  });

  const jsMatches = content.match(/<script[^>]+src=["']([^"']+)["']/gi) || [];
  jsMatches.forEach(tag => {
    const m = tag.match(/src=["']([^"']+)["']/i);
    if (m && !m[1].startsWith('http')) {
      const target = path.resolve(dir, m[1]);
      if (!fs.existsSync(target)) {
        console.error(`[BROKEN JS] in ${file}: ${m[1]} -> ${target}`);
        errors++;
      }
    }
  });

  // 6. Check Images
  const imgMatches = content.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
  imgMatches.forEach(tag => {
    const m = tag.match(/src=["']([^"']+)["']/i);
    if (m && !m[1].startsWith('http') && !m[1].startsWith('data:')) {
      const target = path.resolve(dir, m[1]);
      if (!fs.existsSync(target)) {
        console.error(`[BROKEN IMG] in ${file}: ${m[1]} -> ${target}`);
        errors++;
      }
    }
  });

  // 7. Check Internal Links
  const aMatches = content.match(/<a[^>]+href=["']([^"']+)["']/gi) || [];
  aMatches.forEach(tag => {
    const m = tag.match(/href=["']([^"']+)["']/i);
    if (m) {
      const href = m[1];
      if (!href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
        const cleanHref = href.split('#')[0];
        if (cleanHref) {
          let target = path.resolve(dir, cleanHref);
          if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
            target = path.join(target, 'index.html');
          }
          if (!fs.existsSync(target)) {
            console.error(`[BROKEN LINK] in ${file}: ${href} -> ${target}`);
            errors++;
          }
        }
      }
    }
  });

  // 8. Check JSON-LD
  const jsonLdMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  jsonLdMatches.forEach(block => {
    const raw = block.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      JSON.parse(raw);
    } catch (e) {
      console.error(`[JSON-LD ERROR] in ${file}: ${e.message}`);
      errors++;
    }
  });
});

console.log(`\nAudit completed! Total errors found: ${errors}`);
if (errors === 0) {
  console.log('ALL HTML files passed validation with 100% success!');
}
