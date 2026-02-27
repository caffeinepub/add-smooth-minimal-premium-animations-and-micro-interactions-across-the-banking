import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Smartphone, Zap, Lock, TrendingUp, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function NeoPage() {
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  const features = [
    {
      icon: Target,
      title: 'Life Stage Insights',
      description: 'Personalized financial insights and recommendations based on your current life stage.',
    },
    {
      icon: Zap,
      title: 'Instant Everything',
      description: 'Instant transfers, real-time notifications, and immediate access to your money.',
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'Biometric authentication and AI-powered fraud detection keep your money safe.',
    },
    {
      icon: Sparkles,
      title: 'Smart Automation',
      description: 'Automated savings, bill pay, and budgeting tools that work in the background.',
    },
  ];

  const lifeStageFeatures = [
    {
      stage: 'Student Life',
      features: ['Budget tracking for student expenses', 'Student loan management', 'Part-time income tracking', 'Financial literacy modules'],
    },
    {
      stage: 'First Job',
      features: ['Career milestone tracking', 'Emergency fund builder', 'First home savings goals', 'Credit score monitoring'],
    },
    {
      stage: 'Family Planning',
      features: ['Family budget management', 'Education savings tracker', 'Joint account features', 'Family goal planning'],
    },
    {
      stage: 'Business Growth',
      features: ['Business expense tracking', 'Cash flow forecasting', 'Invoice management', 'Growth analytics'],
    },
    {
      stage: 'Retirement',
      features: ['Retirement income planning', 'Investment portfolio tracking', 'Estate planning tools', 'Healthcare expense management'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal via-primary to-copper">
        <div className="absolute inset-0 bg-[url('/assets/generated/digital-banking-illustration.dim_600x400.png')] bg-cover bg-center opacity-5" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center text-primary-foreground">
              <img
                src="/assets/generated/neo-logo-life-based.dim_250x100.png"
                alt="NEO"
                className="mb-6 h-20 w-auto"
              />
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Life-Based Banking in Your Pocket
              </h1>
              <p className="mb-8 text-lg opacity-90 md:text-xl">
                NEO brings DSOUZA BANK's revolutionary Life-Based Banking approach to your smartphone. Experience personalized financial management that adapts to your life stage and goals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => navigate({ to: '/contact' })}
                  className="premium-button text-base font-semibold"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: '/services' })}
                  className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 premium-button text-base font-semibold"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/assets/generated/mobile-app-mockup.dim_400x600.png"
                  alt="NEO Mobile App"
                  className="relative z-10 h-auto w-full max-w-sm rounded-3xl shadow-2xl transition-transform duration-slower ease-premium hover:scale-105"
                />
                {!prefersReducedMotion && (
                  <div className="absolute -inset-4 -z-10 animate-pulse rounded-3xl bg-gradient-to-br from-copper/30 to-teal/30 blur-2xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About NEO */}
      <MotionReveal delay={100}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                What is NEO?
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                NEO is DSOUZA BANK's digital-first subsidiary, launched in 2020 and reimagined in 2024 to deliver Life-Based Banking through mobile technology. NEO understands your life stage and provides personalized financial tools, insights, and support exactly when you need them.
              </p>
              <p className="text-lg text-muted-foreground">
                As part of the DSOUZA BANK family, NEO combines cutting-edge fintech innovation with the trust and stability of a established financial institution. You get modern digital banking backed by 40 years of banking expertise.
              </p>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Key Features */}
      <MotionReveal delay={100}>
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Why Choose NEO?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Digital banking designed around your life, not the other way around.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 premium-card">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/20 to-teal/10">
                      <feature.icon className="h-6 w-6 text-teal" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Life Stage Features */}
      <MotionReveal delay={100}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Features for Every Life Stage
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                NEO adapts to your life stage, providing the tools and insights you need right now.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lifeStageFeatures.map((item, index) => (
                <Card key={index} className="border-border/50 premium-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.stage}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-teal" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Relationship with DSOUZA BANK */}
      <MotionReveal delay={100}>
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
                NEO & DSOUZA BANK: One Family
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'Seamless Integration',
                    description: 'Your NEO account is fully integrated with DSOUZA BANK. Access branches, ATMs, and all traditional banking services while enjoying digital convenience.',
                  },
                  {
                    title: 'Trusted Security',
                    description: 'NEO is backed by DSOUZA BANK\'s 40 years of banking expertise and robust security infrastructure. Innovation meets trust.',
                  },
                  {
                    title: 'Expert Support',
                    description: 'Get instant support through NEO\'s in-app chat or visit any DSOUZA BANK branch for personalized advice from life-stage specialists.',
                  },
                  {
                    title: 'Best of Both Worlds',
                    description: 'Use NEO for daily digital banking and DSOUZA BANK for comprehensive financial planning. Choose what works for you.',
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border/50 premium-card">
                    <CardContent className="p-8">
                      <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                      <p className="text-base text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* CTA Section */}
      <MotionReveal delay={100}>
        <section className="bg-gradient-to-br from-primary to-teal py-16 text-primary-foreground md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Experience NEO?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands who've discovered Life-Based Banking on their smartphones.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate({ to: '/contact' })}
              className="premium-button text-base font-semibold"
            >
              Contact Us Today
            </Button>
          </div>
        </section>
      </MotionReveal>
    </div>
  );
}
