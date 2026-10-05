const http = require('http');

const urls = [
  '/',
  '/about/',
  '/services/',
  '/services/brand-development/',
  '/services/advertising-solutions/',
  '/services/event-management/',
  '/portfolio/',
  '/clients/',
  '/blog/',
  '/blog/what-is-atl-and-btl-advertising/',
  '/blog/how-to-build-a-strong-brand-identity/',
  '/blog/brand-development-vs-advertising/',
  '/blog/choosing-an-advertising-agency-in-kathmandu/',
  '/contact/',
  '/404.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/infinity-logo.png',
  '/assets/favicon.svg',
  '/assets/images/brand-development.svg',
  '/assets/images/advertising-solutions.svg',
  '/assets/images/event-management.svg',
  '/assets/images/hero-art.svg',
  '/sitemap.xml',
  '/robots.txt',
  '/non-existent-page/'
];

let completed = 0;
let errors = 0;

urls.forEach(u => {
  http.get('http://localhost:3000' + u, res => {
    completed++;
    const isExpected404 = u === '/non-existent-page/';
    const expectedCode = isExpected404 ? 404 : 200;
    if (res.statusCode !== expectedCode) {
      console.error(`FAILED: ${u} -> Status ${res.statusCode} (Expected ${expectedCode})`);
      errors++;
    } else {
      console.log(`OK (${res.statusCode}): ${u} [${res.headers['content-type']}]`);
    }
    if (completed === urls.length) {
      console.log(`\nTested ${completed} URLs. Errors: ${errors}`);
      process.exit(errors === 0 ? 0 : 1);
    }
  }).on('error', err => {
    console.error('Request error:', u, err.message);
    process.exit(1);
  });
});
