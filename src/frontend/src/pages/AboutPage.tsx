import { Award, Globe, Heart, Shield, TrendingUp, Users } from "lucide-react";
import MotionReveal from "../components/motion/MotionReveal";

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "We uphold the highest standards of transparency and ethical banking practices in every interaction.",
    color: "text-lavender-700",
    bg: "bg-lavender-50",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Every product, feature, and service is designed with our customers' best interests at heart.",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously invest in technology to deliver cutting-edge banking solutions for modern India.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description:
      "Banking for everyone — from rural communities to urban professionals, we serve all of India.",
    color: "text-red-700",
    bg: "bg-red-50",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Committed to green banking practices and supporting India's sustainable development goals.",
    color: "text-teal-700",
    bg: "bg-teal-50",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Award-winning service recognized by RBI, IBA, and leading financial institutions across India.",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
];

const milestones = [
  {
    year: "1985",
    event: "Founded in Mumbai as a cooperative bank serving local communities.",
  },
  {
    year: "1995",
    event: "Received scheduled commercial bank status from RBI.",
  },
  { year: "2005", event: "Expanded to 500+ branches across 15 states." },
  {
    year: "2012",
    event: "Launched internet banking and mobile app — first in the region.",
  },
  { year: "2018", event: "Crossed 10 million customers milestone." },
  {
    year: "2022",
    event: "Launched NEO digital banking platform with AI capabilities.",
  },
  {
    year: "2024",
    event: "Introduced Life-Based Banking — personalized for every life stage.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lavender-50 to-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-lavender-100 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lavender-100 border border-lavender-200/60 rounded-full text-xs font-bold text-[#000000] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-lavender-600 animate-pulse" />
                Our Story
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#000000] mb-6 leading-tight">
                Four Decades of
                <span className="block text-lavender-700">Trusted Banking</span>
              </h1>
              <p className="text-lg text-[#1A1A1A] leading-relaxed font-medium">
                Founded in 1985, DSOUZA Bank has grown from a small cooperative
                serving Mumbai's communities to one of India's most trusted
                financial institutions — serving over 15 million customers
                across 28 states.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <MotionReveal>
              <div className="p-8 bg-lavender-50 rounded-2xl border border-lavender-200/60">
                <div className="w-12 h-12 bg-lavender-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-lavender-700" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#000000] mb-3">
                  Our Mission
                </h2>
                <p className="text-[#1A1A1A] leading-relaxed font-medium">
                  To empower every Indian with accessible, affordable, and
                  innovative financial services that enable them to achieve
                  their dreams — regardless of their background, location, or
                  life stage.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={150}>
              <div className="p-8 bg-gradient-to-br from-lavender-700 to-lavender-900 rounded-2xl text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Our Vision
                </h2>
                <p className="text-lavender-100 leading-relaxed font-medium">
                  To be India's most trusted and innovative bank — a financial
                  partner that grows with every customer through every stage of
                  life, powered by technology and driven by human values.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
                Our Core Values
              </h2>
              <p className="text-[#1A1A1A] max-w-2xl mx-auto font-medium">
                The principles that guide every decision we make and every
                service we deliver.
              </p>
            </div>
          </MotionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <MotionReveal key={value.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-lavender-200/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-12 h-12 ${value.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#000000] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
                Our Journey
              </h2>
              <p className="text-[#1A1A1A] font-medium">
                Four decades of growth, innovation, and service to India.
              </p>
            </div>
          </MotionReveal>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lavender-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <MotionReveal key={m.year} delay={i * 80}>
                  <div className="flex items-start gap-6 pl-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-lavender-700 border-4 border-white shadow-soft flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <span className="inline-block px-2.5 py-1 bg-lavender-100 text-lavender-800 text-xs font-bold rounded-full mb-2">
                        {m.year}
                      </span>
                      <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                        {m.event}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bank Building Image */}
      <section className="py-16 bg-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-soft-xl">
              <img
                src="/assets/generated/dsouza-bank-building.dim_800x600.jpg"
                alt="DSOUZA Bank Headquarters"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    DSOUZA Bank Headquarters
                  </h3>
                  <p className="text-lavender-200 text-sm font-medium">
                    Mumbai, Maharashtra — Est. 1985
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
