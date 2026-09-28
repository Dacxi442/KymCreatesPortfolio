import React, { useState } from 'react';
import { Send, Check, Mail, MessageSquare, ArrowUpRight, Copy, Linkedin, Instagram, Globe, PenTool } from 'lucide-react';
import { ANTHONY_BIO } from '../data/portfolioData';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.83 5.127 2.274 7.203L.048 24l4.908-2.228a11.96 11.96 0 0 0 7.075 2.285h.005c6.645 0 12.03-5.385 12.03-12.031S18.681 0 12.031 0Zm6.647 17.205c-.279.79-1.341 1.488-1.921 1.583-.538.087-1.229.17-3.955-.964-3.268-1.36-5.37-4.66-5.534-4.88-.163-.22-1.319-1.75-1.319-3.336 0-1.587.828-2.378 1.127-2.695.297-.318.647-.398.86-.398.214 0 .43.003.612.012.188.01.442-.075.69.525.263.636.84 2.054.916 2.203.076.15.125.326.027.525-.1.198-.152.32-.303.497-.151.176-.318.384-.455.506-.151.134-.308.281-.137.575.17.294.757 1.25 1.621 2.02.112.11.22.213.33.313a7.838 7.838 0 0 0 1.29 1.055c.34.225.541.173.743-.062.201-.236.868-1.011 1.101-1.357.233-.346.467-.288.784-.168.318.12 2.01 1.026 2.355 1.198.345.172.576.257.659.4.084.143.084.825-.195 1.615Z" />
  </svg>
);

interface ContactProps {
  theme: 'dark' | 'light';
  prefilledNeed?: string;
}

export const Contact: React.FC<ContactProps> = ({
  theme,
  prefilledNeed = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceNeed: prefilledNeed || 'Creative Solution',
    budget: 'Flexible',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const needsOptions = [
    'Photography',
    'Videography',
    'Web Design & Development',
    'Brand & Visual Identity',
    'Other',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ANTHONY_BIO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isDark = theme === 'dark';
  const textPrimary = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const textSecondary = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';
  const textMuted = isDark ? 'text-[#7A736B]' : 'text-[#6B635B]';
  const textFaint = isDark ? 'text-[#5C5550]' : 'text-[#8A827A]';
  const borderSubtle = isDark ? 'border-white/10' : 'border-black/10';
  const borderMid = isDark ? 'border-white/20' : 'border-black/15';
  const bgCard = isDark ? 'bg-white/[0.02]' : 'bg-black/[0.03]';
  const bgPanel = isDark ? 'bg-[#0E0D0B]' : 'bg-[#FFFFFF]';
  const inputBg = isDark ? 'bg-black/60' : 'bg-white';
  const inputText = isDark ? 'text-[#EDE8E3]' : 'text-[#1E1C1A]';
  const inputBorder = isDark ? 'border-white/20' : 'border-black/15';
  const labelText = isDark ? 'text-[#C5BDB5]' : 'text-[#3E3832]';

  return (
    <section id="contact" className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t ${borderSubtle} overflow-hidden`}>
      {/* Ambient orange aura glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#FF5500]/12 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="mb-6">
                <span className={`inline-block font-mono text-[10px] tracking-widest uppercase border ${borderSubtle} px-3 py-1 ${textMuted} ${bgCard}`}>
                  [ SECTION // CONTACT ]
                </span>
              </div>
              <h2 className={`text-4xl sm:text-6xl font-editorial font-bold tracking-tight ${textPrimary} leading-tight`}>
                What can I do for <span className="italic font-normal text-[#FF5500]">you?</span>
              </h2>
            </div>

            <div className={`space-y-2 text-lg sm:text-xl font-editorial italic ${isDark ? 'text-[#EDE8E3]/90' : 'text-[#2B2724]'}`}>
              <p>Have an idea waiting to become real?</p>
              <p>Need visuals that demand respect?</p>
              <p>Need a website built with mathematical intent?</p>
              <p className="text-[#FF5500] font-normal not-italic font-sans font-black text-2xl pt-2">
                LET'S CONNECT.
              </p>
            </div>

            <p className={`font-body text-sm sm:text-base ${textSecondary} leading-relaxed max-w-md`}>
              Anthony works directly with ambitious founders, artistic directors, and brands
              worldwide. No account managers, no friction — direct creative accountability.
            </p>

            {/* Direct Contact Cards */}
            <div className={`space-y-3 pt-4 border-t ${borderSubtle} max-w-md`}>
              {/* Email direct copy */}
              <div className={`p-4 border ${borderSubtle} ${bgCard} flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-none bg-[#FF5500]/10 flex items-center justify-center text-[#FF5500]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono ${textFaint} uppercase`}>DIRECT EMAIL</div>
                    <div className={`text-xs font-mono ${textPrimary} font-bold`}>{ANTHONY_BIO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3 py-1 text-xs font-mono border ${borderMid} hover:border-[#FF5500] ${textPrimary} flex items-center space-x-1`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-[#FF5500]" />
                      <span className="text-[#FF5500]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/254791742976?text=Hi%20Anthony,%20I%20saw%20your%20portfolio%20at%20Kym%20Creates.`}
                target="_blank"
                rel="noreferrer"
                className={`p-4 border ${borderSubtle} ${bgCard} hover:border-[#FF5500]/50 transition-colors flex items-center justify-between group`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-none bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono ${textFaint} uppercase`}>
                      FAST TRACK // WHATSAPP
                    </div>
                    <div className={`text-xs font-mono ${textPrimary} font-bold`}>
                      Direct WhatsApp Conversation
                    </div>
                  </div>
                </div>
                <ArrowUpRight className={`w-4 h-4 ${textFaint} group-hover:text-[#FF5500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
              </a>
            </div>

            {/* Social Channels - Icon Based */}
            <div className="pt-2">
              <span className={`font-mono text-xs ${textMuted} uppercase tracking-wider block mb-4`}>
                CONNECT:
              </span>
              <div className="flex flex-wrap gap-4">
                <a href="https://linkedin.com/in/anthony-kimani" target="_blank" rel="noreferrer" className={`p-2.5 border ${isDark ? 'border-white/15 bg-white/5 text-[#C5BDB5]' : 'border-black/12 bg-black/[0.04] text-[#3E3832]'} hover:border-[#FF5500] hover:text-[#FF5500] transition-colors rounded-none`} aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://kimani-anthony.vercel.app" target="_blank" rel="noreferrer" className={`p-2.5 border ${isDark ? 'border-white/15 bg-white/5 text-[#C5BDB5]' : 'border-black/12 bg-black/[0.04] text-[#3E3832]'} hover:border-[#FF5500] hover:text-[#FF5500] transition-colors rounded-none`} aria-label="Portfolio">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`p-2.5 border ${isDark ? 'border-white/15 bg-white/5 text-[#C5BDB5]' : 'border-black/12 bg-black/[0.04] text-[#3E3832]'} hover:border-[#FF5500] hover:text-[#FF5500] transition-colors rounded-none`} aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className={`p-2.5 border ${isDark ? 'border-white/15 bg-white/5 text-[#C5BDB5]' : 'border-black/12 bg-black/[0.04] text-[#3E3832]'} hover:border-[#FF5500] hover:text-[#FF5500] transition-colors rounded-none`} aria-label="Behance">
                  <PenTool className="w-5 h-5" />
                </a>
                <a href={`mailto:${ANTHONY_BIO.email}`} className={`p-2.5 border ${isDark ? 'border-white/15 bg-white/5 text-[#C5BDB5]' : 'border-black/12 bg-black/[0.04] text-[#3E3832]'} hover:border-[#FF5500] hover:text-[#FF5500] transition-colors rounded-none`} aria-label="Gmail">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6">
            <div className={`p-8 sm:p-10 border border-[#FF5500]/40 ${bgPanel} relative shadow-2xl`}>
              {/* Corner crosshair */}
              <div className="absolute top-2 right-2 text-[9px] font-mono text-[#FF5500]">
                + INQUIRY_MODULE
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FF5500] text-white flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,85,0,0.5)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className={`font-sans font-black text-2xl sm:text-3xl ${textPrimary}`}>
                    MESSAGE TRANSMITTED
                  </h3>
                  <p className={`font-body text-sm ${textSecondary} max-w-sm mx-auto leading-relaxed`}>
                    Thank you, {formData.name || 'friend'}. Anthony has received your note and will
                    reply directly within 24 hours to begin answering:{' '}
                    <span className="text-[#FF5500] font-bold">What can I do for you?</span>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        serviceNeed: 'Creative Solution',
                        budget: 'Flexible',
                        message: '',
                      });
                    }}
                    className={`mt-4 px-6 py-2 border ${borderMid} hover:border-[#FF5500] text-xs font-mono uppercase ${textPrimary}`}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className={`border-b ${borderSubtle} pb-4`}>
                    <span className="font-mono text-xs text-[#FF5500] uppercase font-bold tracking-widest">
                      INITIATE A CONVERSATION
                    </span>
                    <p className={`text-xs font-body ${textMuted} mt-1`}>
                      Fill out the essentials below and let's bring tangible shape to your challenge.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className={`block text-xs font-mono uppercase ${labelText} mb-1.5 font-bold`}>
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance (Lumina Atelier)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] ${inputText} text-sm font-body outline-none transition-colors placeholder:${isDark ? 'text-white/30' : 'text-black/30'}`}
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className={`block text-xs font-mono uppercase ${labelText} mb-1.5 font-bold`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@lumina-atelier.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] ${inputText} text-sm font-body outline-none transition-colors placeholder:${isDark ? 'text-white/30' : 'text-black/30'}`}
                    />
                  </div>

                  {/* What do you need? */}
                  <div>
                    <label className={`block text-xs font-mono uppercase ${labelText} mb-2 font-bold`}>
                      What can Anthony create for you? *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {needsOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, serviceNeed: opt })}
                          className={`p-2.5 text-xs font-mono text-left border transition-all ${formData.serviceNeed === opt
                            ? 'border-[#FF5500] bg-[#FF5500] text-white font-bold'
                            : `${isDark ? 'border-white/15 bg-white/[0.02] text-[#C5BDB5] hover:border-white/40' : 'border-black/12 bg-black/[0.03] text-[#3E3832] hover:border-black/25'}`
                            }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div>
                    <label className={`block text-xs font-mono uppercase ${labelText} mb-1.5 font-bold`}>
                      Describe the Challenge / Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Anthony about the idea, desired timeline, or problem you want to turn into something tangible..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500] ${inputText} text-sm font-body outline-none transition-colors resize-none placeholder:${isDark ? 'text-white/30' : 'text-black/30'}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FF5500] hover:bg-[#E04800] text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 transition-all shadow-[0_0_25px_rgba(255,85,0,0.4)]"
                  >
                    <span>Send Message to Anthony</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
