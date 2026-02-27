import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import MotionReveal from "../components/motion/MotionReveal";
import { LoadingDots } from "../components/motion/LoadingDots";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["1800-XXX-XXXX (Toll Free)", "Mon–Sat: 8 AM – 8 PM"],
    color: "text-lavender-700",
    bg: "bg-lavender-50",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["support@dsouzabank.in", "Response within 24 hours"],
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["DSOUZA Bank HQ", "Mumbai, Maharashtra 400001"],
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: Clock,
    title: "Banking Hours",
    details: ["Mon–Fri: 9 AM – 5 PM", "Sat: 9 AM – 1 PM"],
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-lavender-50 to-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-lavender-100 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lavender-100 border border-lavender-200/60 rounded-full text-xs font-bold text-[#000000] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender-600 animate-pulse" />
              We're Here to Help
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#000000] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto font-medium">
              Have a question or need assistance? Our team is ready to help you with any banking needs.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <MotionReveal key={info.title} delay={i * 80}>
                <div className="p-5 bg-white rounded-2xl border border-lavender-200/60 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-10 h-10 ${info.bg} rounded-xl flex items-center justify-center mb-3`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <h3 className="font-bold text-sm text-[#000000] mb-2">{info.title}</h3>
                  {info.details.map((d) => (
                    <p key={d} className="text-xs text-[#1A1A1A] font-medium leading-relaxed">{d}</p>
                  ))}
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-lavender-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="bg-white rounded-2xl border border-lavender-200/60 shadow-soft-lg overflow-hidden">
              <div className="p-6 border-b border-lavender-200/40 bg-lavender-50/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lavender-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-lavender-700" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-[#000000]">Send a Message</h2>
                    <p className="text-xs text-[#1A1A1A] font-medium">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3 py-2.5 rounded-xl border border-lavender-200/60 bg-lavender-50/40 text-[#000000] placeholder-[#666666] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-3 py-2.5 rounded-xl border border-lavender-200/60 bg-lavender-50/40 text-[#000000] placeholder-[#666666] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-3 py-2.5 rounded-xl border border-lavender-200/60 bg-lavender-50/40 text-[#000000] placeholder-[#666666] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#000000] mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="w-full px-3 py-2.5 rounded-xl border border-lavender-200/60 bg-lavender-50/40 text-[#000000] placeholder-[#666666] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000000] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more about your query..."
                    className="w-full px-3 py-2.5 rounded-xl border border-lavender-200/60 bg-lavender-50/40 text-[#000000] placeholder-[#666666] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-lavender-700 text-white rounded-xl font-bold text-sm hover:bg-lavender-800 shadow-soft hover:shadow-glow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingDots />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
