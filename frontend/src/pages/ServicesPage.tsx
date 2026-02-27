import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Briefcase, Heart, TrendingUp, Home, CheckCircle2 } from 'lucide-react';
import { MotionReveal } from '@/components/motion/MotionReveal';

export default function ServicesPage() {
  const lifeStageServices = [
    {
      category: 'Student Life',
      icon: GraduationCap,
      color: 'text-teal',
      items: [
        {
          title: 'Student Checking Account',
          description: 'Zero-fee checking designed for students with mobile banking and budgeting tools.',
          features: ['No monthly fees', 'Free ATM access', 'Mobile check deposit', 'Overdraft protection'],
        },
        {
          title: 'Student Savings Account',
          description: 'Build your savings habit with competitive interest rates and no minimum balance.',
          features: ['High interest rates', 'No minimum balance', 'Automatic savings tools', 'Financial education'],
        },
        {
          title: 'Student Loan Guidance',
          description: 'Expert advice on managing student loans and planning for repayment.',
          features: ['Loan consolidation options', 'Repayment strategies', 'Refinancing guidance', 'Financial counseling'],
        },
      ],
    },
    {
      category: 'First Job',
      icon: Briefcase,
      color: 'text-copper',
      items: [
        {
          title: 'Career Starter Package',
          description: 'Complete banking solution for young professionals starting their careers.',
          features: ['Premium checking account', 'First credit card', 'Savings account', 'Financial planning tools'],
        },
        {
          title: 'First-Time Homebuyer Program',
          description: 'Make homeownership a reality with specialized mortgage solutions.',
          features: ['Low down payment options', 'First-time buyer incentives', 'Pre-approval assistance', 'Closing cost support'],
        },
        {
          title: 'Emergency Fund Builder',
          description: 'Automated savings program to build your financial safety net.',
          features: ['Automatic transfers', 'Goal tracking', 'High-yield savings', 'Financial coaching'],
        },
      ],
    },
    {
      category: 'Family Planning',
      icon: Heart,
      color: 'text-primary',
      items: [
        {
          title: 'Family Savings Account',
          description: 'Joint accounts and savings tools designed for growing families.',
          features: ['Joint account options', 'Child savings accounts', 'Education fund planning', 'Family budgeting tools'],
        },
        {
          title: 'Home Mortgage Solutions',
          description: 'Flexible mortgage options for families looking to buy or refinance.',
          features: ['Competitive rates', 'Flexible terms', 'Refinancing options', 'Home equity loans'],
        },
        {
          title: 'Family Protection Plans',
          description: 'Comprehensive insurance and protection for your loved ones.',
          features: ['Life insurance', 'Disability coverage', 'Health savings accounts', 'Estate planning'],
        },
      ],
    },
    {
      category: 'Business Growth',
      icon: TrendingUp,
      color: 'text-teal',
      items: [
        {
          title: 'Business Banking Package',
          description: 'Complete banking solution for entrepreneurs and small businesses.',
          features: ['Business checking', 'Merchant services', 'Payroll solutions', 'Cash management'],
        },
        {
          title: 'Business Loans & Credit',
          description: 'Flexible financing options to fuel your business growth.',
          features: ['Term loans', 'Lines of credit', 'Equipment financing', 'Commercial real estate'],
        },
        {
          title: 'Investment & Expansion',
          description: 'Strategic financial planning for business growth and expansion.',
          features: ['Investment advisory', 'Expansion financing', 'Treasury management', 'Risk management'],
        },
      ],
    },
    {
      category: 'Retirement',
      icon: Home,
      color: 'text-copper',
      items: [
        {
          title: 'Retirement Planning',
          description: 'Comprehensive retirement planning and income strategies.',
          features: ['IRA accounts', 'Pension planning', '401(k) rollovers', 'Income strategies'],
        },
        {
          title: 'Wealth Management',
          description: 'Preserve and grow your wealth with expert portfolio management.',
          features: ['Portfolio management', 'Asset allocation', 'Tax optimization', 'Legacy planning'],
        },
        {
          title: 'Senior Banking Benefits',
          description: 'Exclusive banking benefits and services for seniors.',
          features: ['No-fee accounts', 'Enhanced security', 'Dedicated support', 'Estate services'],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <MotionReveal>
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Life-Based Banking Services
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Discover banking solutions tailored to your life stage. From student accounts to retirement planning, we're with you every step of the way.
              </p>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Services by Life Stage */}
      <MotionReveal delay={100}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="Student Life" className="w-full">
              <TabsList className="mb-12 grid w-full grid-cols-2 lg:grid-cols-5">
                {lifeStageServices.map((service) => (
                  <TabsTrigger 
                    key={service.category} 
                    value={service.category} 
                    className="text-sm transition-all duration-base ease-premium md:text-base"
                  >
                    <service.icon className="mr-2 h-4 w-4" />
                    {service.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {lifeStageServices.map((service) => (
                <TabsContent key={service.category} value={service.category} className="space-y-8">
                  <div className="mb-8 text-center">
                    <div className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold">{service.category} Banking Solutions</h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {service.items.map((item, index) => (
                      <Card key={index} className="border-border/50 premium-card">
                        <CardHeader>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="text-base">{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-sm">
                                <CheckCircle2 className={`mr-2 mt-0.5 h-4 w-4 flex-shrink-0 ${service.color}`} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </MotionReveal>

      {/* Additional Information */}
      <MotionReveal delay={100}>
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Banking That Evolves With You
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                As you transition between life stages, your banking needs change. DSOUZA BANK makes it seamless to upgrade your services, access new products, and receive personalized guidance for your next chapter.
              </p>
              <div className="grid gap-6 text-left sm:grid-cols-2">
                {[
                  {
                    title: 'Seamless Transitions',
                    description: 'Moving to a new life stage? We\'ll help you transition smoothly with personalized recommendations and easy account upgrades.',
                  },
                  {
                    title: 'Expert Guidance',
                    description: 'Our advisors specialize in life-stage banking and provide personalized guidance for your unique situation.',
                  },
                  {
                    title: 'Digital & In-Person',
                    description: 'Access services through NEO\'s mobile app or visit our branches for personalized support—your choice.',
                  },
                  {
                    title: 'Comprehensive Support',
                    description: 'From financial education to wealth management, we provide support at every level of your financial journey.',
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-border/50 premium-card">
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>
    </div>
  );
}
