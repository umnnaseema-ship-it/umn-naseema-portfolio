import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const { personal } = resumeData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, error: null, submitted: false });

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D94668', '#B8324F', '#E85070', '#D4A359']
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDE8ED] text-[#B8324F] text-xs font-bold tracking-widest uppercase border border-[#F7D0DA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            Let's Collaborate
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2124]">
            Connect & Discuss Opportunities
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280]">
            Available for full-time Data Analyst roles, AI/ML engineering internships, and research collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D94668] to-[#D4A359] mx-auto rounded-full mt-2" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-8 border border-[#F0E6E1] shadow-xs space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1E2124]">
                Contact Information
              </h3>
              <p className="text-sm text-[#3B3F45] leading-relaxed">
                Whether you have an inquiry regarding a data analytics project, an internship opportunity, or wish to connect with a passionate technologist, feel free to reach out.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F6] border border-[#F0E6E1] hover:border-[#D94668] hover:bg-[#FFF2F5] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#D94668] flex items-center justify-center border border-[#F0E6E1] group-hover:bg-[#D94668] group-hover:text-white transition-colors shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm font-bold text-[#1E2124] group-hover:text-[#D94668]">
                      {personal.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F6] border border-[#F0E6E1] hover:border-[#D94668] hover:bg-[#FFF2F5] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-[#D94668] flex items-center justify-center border border-[#F0E6E1] group-hover:bg-[#D94668] group-hover:text-white transition-colors shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <span className="text-sm font-bold text-[#1E2124] group-hover:text-[#D94668]">
                      {personal.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F6] border border-[#F0E6E1]">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#D94668] flex items-center justify-center border border-[#F0E6E1] shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-bold text-[#1E2124]">
                      {personal.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Links */}
              <div className="pt-4 border-t border-[#F5EBE6]">
                <p className="text-xs font-bold text-[#B8324F] uppercase tracking-wider mb-3">
                  Online Profiles:
                </p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] text-xs font-semibold text-[#2D3136] hover:text-[#0077B5] hover:bg-white border border-[#F0E6E1] transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedInIcon className="w-4 h-4 text-[#0077B5]" />
                      LinkedIn Profile
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280]" />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F6] text-xs font-semibold text-[#2D3136] hover:text-[#181717] hover:bg-white border border-[#F0E6E1] transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <GitHubIcon className="w-4 h-4 text-[#181717]" />
                      GitHub Profile
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280]" />
                  </a>
                </div>
              </div>

              {/* Resume Download Callout */}
              <div className="pt-2">
                <a
                  href={personal.resumePdf}
                  download="Umn_Naseema_M_Resume.pdf"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#B8324F] via-[#D94668] to-[#E85070] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:from-[#A02842] hover:to-[#D94668] shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Official Resume (PDF)
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F0E6E1] shadow-xs">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#1E2124]">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                  Fill out this form and I will get back to you promptly.
                </p>
              </div>

              {status.submitted ? (
                <div className="p-8 rounded-2xl bg-[#FDE8ED] border border-[#F7D0DA] text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D94668] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#1E2124]">
                    Thank You for Connecting!
                  </h4>
                  <p className="text-sm text-[#3B3F45] max-w-md mx-auto">
                    Your message has been recorded. You can also send a direct email to{' '}
                    <a href={`mailto:${personal.email}`} className="font-bold text-[#D94668] underline">
                      {personal.email}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setStatus({ submitting: false, submitted: false, error: null });
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#B8324F] border border-[#F0D5DD] hover:bg-[#FFF5F7]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {status.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#B8324F] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ayesha Rahman"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border border-[#F0E6E1] focus:border-[#D94668] focus:bg-white text-sm text-[#1E2124] focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#B8324F] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. ayesha@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border border-[#F0E6E1] focus:border-[#D94668] focus:bg-white text-sm text-[#1E2124] focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B8324F] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Data Analyst Opportunity / SIH Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border border-[#F0E6E1] focus:border-[#D94668] focus:bg-white text-sm text-[#1E2124] focus:outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#B8324F] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F6] border border-[#F0E6E1] focus:border-[#D94668] focus:bg-white text-sm text-[#1E2124] focus:outline-hidden transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#6B7280]">
                      Direct recipient: {personal.email}
                    </span>

                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8324F] via-[#D94668] to-[#E85070] hover:from-[#A02842] hover:to-[#D94668] transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {status.submitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
