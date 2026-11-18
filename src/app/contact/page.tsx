"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { organizationInfo } from "@/data/organization";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const intent = searchParams?.get("intent");
  const artistParam = searchParams?.get("artist");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (intent === "join") {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Artist & Community Membership",
        subject: "Joining Spectrum Art Association Community",
      }));
    } else if (intent === "participate") {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Exhibition & Workshop Participation",
        subject: "Participation in Upcoming Activities",
      }));
    } else if (intent === "artist_inquiry" && artistParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Artwork & Curatorial Inquiry",
        subject: `Artwork Inquiry regarding ${artistParam}`,
      }));
    }
  }, [intent, artistParam]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        inquiryType: "General Inquiry",
        message: "",
      });
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="py-12 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-charcoal">
          Thank You for Reaching Out
        </h3>
        <p className="text-base text-charcoal-muted max-w-md mx-auto font-sans leading-relaxed">
          Your message has been received by Spectrum Art Association. A member of our committee or secretariat will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary-hover transition-colors shadow-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <span className="text-xs uppercase font-semibold tracking-widest text-primary">
          Send An Inquiry
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mt-1">
          Contact the Association
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-muted font-sans mt-1">
          Please fill out the form below. All fields marked with an asterisk (*) are required.
        </p>
      </div>

      {/* Inquiry Type */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-2">
          Inquiry Category
        </label>
        <select
          value={formData.inquiryType}
          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal-border/40 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Artist & Community Membership">Artist &amp; Community Membership</option>
          <option value="Exhibition & Workshop Participation">Exhibition &amp; Workshop Participation</option>
          <option value="Artwork & Curatorial Inquiry">Artwork &amp; Curatorial Inquiry</option>
          <option value="Media & Press Inquiry">Media &amp; Cultural Collaboration</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Shrestha"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors ${
              errors.name ? "border-red-400 bg-red-50/20" : "border-charcoal-border/40"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. yourname@domain.com"
            className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors ${
              errors.email ? "border-red-400 bg-red-50/20" : "border-charcoal-border/40"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+977-98XXXXXXXX"
            className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal-border/40 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
            Subject (Optional)
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Artwork submission or workshop query"
            className="w-full px-4 py-3 rounded-xl bg-white border border-charcoal-border/40 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
          Your Message *
        </label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Write your message, question, or membership interest here..."
          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors ${
            errors.message ? "border-red-400 bg-red-50/20" : "border-charcoal-border/40"
          }`}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-primary text-white text-sm font-semibold tracking-wide shadow-art hover:bg-primary-hover hover:shadow-art-hover transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary/60 border-b border-charcoal-border/20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-accent/80 text-xs text-primary font-medium mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Connect With Spectrum Art Association</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-charcoal-muted font-sans mt-4 leading-relaxed">
              Whether you are an artist seeking to join our community, a cultural partner, or an art enthusiast, we welcome your inquiry and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Official Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Information & Placeholders (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold tracking-widest text-primary">
                  Official Details
                </span>
                <h2 className="text-3xl font-serif font-bold text-charcoal">
                  Association Secretariat
                </h2>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  Established in {organizationInfo.establishedBS} ({organizationInfo.establishedAD}). Registered with the District Administration Office, Kathmandu.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4 font-sans">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-charcoal-border/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-accent/60 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold tracking-wider text-charcoal-subtle">
                      Office Address
                    </h3>
                    <p className="text-sm font-medium text-charcoal mt-0.5">
                      {organizationInfo.contact.addressPlaceholder}
                    </p>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Kathmandu Valley, Bagmati Province, Nepal
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-charcoal-border/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-accent/60 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold tracking-wider text-charcoal-subtle">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${organizationInfo.contact.emailPlaceholder}`}
                      className="text-sm font-medium text-primary hover:underline mt-0.5 inline-block"
                    >
                      {organizationInfo.contact.emailPlaceholder}
                    </a>
                    <p className="text-xs text-charcoal-muted mt-1">
                      For membership, exhibition, and workshop inquiries
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-charcoal-border/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-accent/60 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold tracking-wider text-charcoal-subtle">
                      Contact Numbers
                    </h3>
                    <p className="text-sm font-medium text-charcoal mt-0.5">
                      {organizationInfo.contact.phonePlaceholder}
                    </p>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Office Hours: {organizationInfo.contact.hoursPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-6 rounded-2xl bg-secondary border border-charcoal-border/20 space-y-4">
                <h3 className="text-xs uppercase font-semibold tracking-widest text-primary">
                  Follow Our Cultural Activities
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={organizationInfo.contact.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-xs font-medium text-charcoal hover:text-primary border border-charcoal-border/30 shadow-sm transition-all"
                  >
                    <Facebook className="w-4 h-4 text-primary" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={organizationInfo.contact.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-xs font-medium text-charcoal hover:text-primary border border-charcoal-border/30 shadow-sm transition-all"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={organizationInfo.contact.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-xs font-medium text-charcoal hover:text-primary border border-charcoal-border/30 shadow-sm transition-all"
                  >
                    <Youtube className="w-4 h-4 text-primary" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Location Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-charcoal-border/30 bg-[#FAF8F5]">
                <div className="p-4 border-b border-charcoal-border/20 flex items-center justify-between text-xs">
                  <span className="font-semibold text-charcoal flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Google Maps Location Placeholder</span>
                  </span>
                  <span className="text-charcoal-muted">Kathmandu, Nepal</span>
                </div>
                <div className="relative aspect-[16/9] bg-[#EAE5DC] flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto shadow-art animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-charcoal">
                      Spectrum Art Association
                    </p>
                    <p className="text-[11px] text-charcoal-muted max-w-xs mx-auto">
                      Kathmandu, Nepal (Replace with custom Google Maps iframe embed or API coordinates)
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Interactive Contact Form (7 cols) with Suspense wrapper */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] p-8 sm:p-10 lg:p-12 rounded-3xl border border-charcoal-border/30 shadow-card">
                <Suspense fallback={<div className="p-8 text-center text-sm text-charcoal-muted">Loading form...</div>}>
                  <ContactFormInner />
                </Suspense>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
