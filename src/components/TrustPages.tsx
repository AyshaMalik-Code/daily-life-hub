import React, { useState } from 'react';
import { TabType } from '../types';
import { ShieldCheck, Mail, FileText, Info, Send, CheckCircle2 } from 'lucide-react';

interface TrustPagesProps {
  currentTab: 'about' | 'contact' | 'privacy' | 'terms';
  onNavigate: (tab: TabType) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'award') => void;
}

export const TrustPages: React.FC<TrustPagesProps> = ({
  currentTab,
  onNavigate,
  showToast
}) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      showToast('Missing Fields', 'Please fill in all contact fields.', 'info');
      return;
    }
    setContactSent(true);
    showToast('Message Received!', 'Thank you for reaching out to Daily Life Hub.', 'success');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      {/* Tab Switcher for Trust Pages */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto scrollbar-none">
        <button
          onClick={() => onNavigate('about')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            currentTab === 'about'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          About Daily Life Hub
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            currentTab === 'contact'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Contact Us
        </button>
        <button
          onClick={() => onNavigate('privacy')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            currentTab === 'privacy'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => onNavigate('terms')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            currentTab === 'terms'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Terms & Disclaimer
        </button>
      </div>

      {/* 1. ABOUT US */}
      {currentTab === 'about' && (
        <article className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                About Daily Life Hub
              </h1>
              <p className="text-xs text-slate-500">
                Building everyday joy, curiosity, and mental agility.
              </p>
            </div>
          </div>

          <p className="text-sm">
            <strong>Daily Life Hub</strong> is a mobile-first digital companion crafted to provide users across India and globally with a quick, wholesome, 5-minute break during their day. Whether it is kicking off your morning with an intriguing trivia question, testing your logic deduction before a meeting, or solving the eternal question of &ldquo;What Should I Cook?&rdquo;, our mission is to make daily micro-moments engaging and fun.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
            Our Core Principles
          </h2>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li>
              <strong>Lightweight & Fast:</strong> No heavy downloads, account creation walls, or intrusive trackers. Everything runs instantly in your web browser.
            </li>
            <li>
              <strong>Original & Curated Content:</strong> Trivia questions and brain challenges are drafted with editorial care and factual verification.
            </li>
            <li>
              <strong>Device-Local Privacy:</strong> Your streaks, earned points, and game history stay safely on your device using standard browser storage (<code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">localStorage</code>).
            </li>
            <li>
              <strong>Accessible Everywhere:</strong> Fully responsive across budget smartphones, tablets, laptops, and ultra-wide screens.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
            Technical Architecture
          </h2>
          <p className="text-sm">
            Built using modern web standards including React 19, TypeScript, and Tailwind CSS. The architecture is completely static-hosting compatible and ready for instant deployment to GitHub Pages, Cloud Run, Vercel, or standard static CDNs.
          </p>
        </article>
      )}

      {/* 2. CONTACT US */}
      {currentTab === 'contact' && (
        <article className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Contact & Feedback
              </h1>
              <p className="text-xs text-slate-500">
                Suggestions, question submissions, and general inquiries.
              </p>
            </div>
          </div>

          <p className="text-sm">
            Have a brilliant brain teaser to suggest, a recipe idea, or general feedback about Daily Life Hub? We would love to hear from you!
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
            <p><strong>Official Webmaster Contact:</strong> [contact@dailylifehub.app / webmaster placeholder]</p>
            <p><strong>Response Time:</strong> Typically within 24 to 48 business hours.</p>
          </div>

          {contactSent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-slide-up">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                Message Sent Successfully!
              </h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                Thank you for reaching out. We will review your message shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma / Alex"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message / Suggestion
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your feedback or puzzle suggestion here..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Feedback</span>
              </button>
            </form>
          )}
        </article>
      )}

      {/* 3. PRIVACY POLICY */}
      {currentTab === 'privacy' && (
        <article className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-500">
                Last updated: October 2026
              </p>
            </div>
          </div>

          <p className="text-sm">
            At <strong>Daily Life Hub</strong>, we respect your privacy and are committed to maintaining a clean, privacy-conscious user experience.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            1. Information We Do NOT Collect
          </h2>
          <p className="text-sm">
            We do not require account registration, passwords, phone numbers, or credit card information. We do not harvest or sell personal data.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            2. Local Device Storage (localStorage)
          </h2>
          <p className="text-sm">
            Daily Life Hub saves your game progress, current streak, points, theme preferences (light/dark mode), and unlocked badges locally on your browser using standard HTML5 <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">localStorage</code>. This data never leaves your device and is not transmitted to external database servers. Clearing your browser cache or site data will reset your streak.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            3. Advertising & Cookies
          </h2>
          <p className="text-sm">
            In future releases, Daily Life Hub may display non-intrusive advertisements served through Google AdSense or certified ad networks. Third-party ad vendors may use cookies or web beacons to serve ads based on prior visits to this website or other websites on the internet. Users may opt out of personalized advertising by visiting Google Ad Settings.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            4. Contact Regarding Privacy
          </h2>
          <p className="text-sm">
            For privacy inquiries, please contact: <span className="font-mono text-xs">privacy@[placeholder-domain].com</span>.
          </p>
        </article>
      )}

      {/* 4. TERMS & DISCLAIMER */}
      {currentTab === 'terms' && (
        <article className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Terms of Use & Disclaimer
              </h1>
              <p className="text-xs text-slate-500">
                Last updated: October 2026
              </p>
            </div>
          </div>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            1. Entertainment & Casual Purpose
          </h2>
          <p className="text-sm">
            All quizzes, brain teasers, decision games (&ldquo;This or That&rdquo;), and recipe suggestions on Daily Life Hub are provided strictly for general entertainment, leisure, and mental recreation.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            2. No Scientific or Personality Claims
          </h2>
          <p className="text-sm">
            Games such as &ldquo;This or That&rdquo; and brain teasers do not represent psychometric tests, clinical IQ evaluations, or scientifically certified personality diagnostics. Results are whimsical and meant for fun.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            3. No Medical or Nutritional Advice
          </h2>
          <p className="text-sm">
            The &ldquo;What Should I Cook?&rdquo; meal decider offers general culinary ideas. It does not provide medical, dietary, or allergy-specific prescriptions. Always consult qualified health professionals or certified dietitians for dietary requirements and verify ingredients for food allergies.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            4. Points & Gamified Rewards
          </h2>
          <p className="text-sm">
            Points, streaks, and achievement badges earned on Daily Life Hub are virtual motivational elements with zero monetary or cash equivalent. They cannot be redeemed, transferred, or exchanged for real-world currency.
          </p>

          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            5. Intellectual Property
          </h2>
          <p className="text-sm">
            Original questions, logic puzzles, designs, and content are the property of Daily Life Hub. Content may not be scraped or reproduced for commercial duplication without prior written consent.
          </p>
        </article>
      )}
    </div>
  );
};
