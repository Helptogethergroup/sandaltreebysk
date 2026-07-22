import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Crown,
  HeartHandshake,
  Hotel,
  Medal,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Utensils,
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      number: '1991',
      label: 'Journey Began',
      description: 'The beginning of the group’s journey in the hospitality and catering sector.',
      icon: CalendarDays,
    },
    {
      number: '25+',
      label: 'Hotels & Banquets',
      description: 'A growing portfolio of hospitality and banquet properties.',
      icon: Building2,
    },
    {
      number: '4000+',
      label: 'Workforce',
      description: 'A large team working across the group’s hospitality operations.',
      icon: Users,
    },
    {
      number: '30+',
      label: 'Years of Experience',
      description: 'A journey built through experience, dedication, and continuous growth.',
      icon: Award,
    },
  ];

  const services = [
    {
      icon: HeartHandshake,
      title: 'Weddings & Receptions',
      description:
        'Creating memorable experiences for weddings, receptions, and important family celebrations.',
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description:
        'Professional venues and hospitality services for corporate events and business gatherings.',
    },
    {
      icon: PartyPopperIcon,
      title: 'Social Celebrations',
      description:
        'From birthdays and anniversaries to cocktail parties and special social occasions.',
    },
    {
      icon: Hotel,
      title: 'Hotels & Resorts',
      description:
        'Hospitality experiences across hotels, luxury properties, deluxe hotels, and resorts.',
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description:
        'Catering solutions designed around quality food, professional service, and guest satisfaction.',
    },
    {
      icon: Sparkles,
      title: 'Special Events',
      description:
        'Product launches, corporate get-togethers, executive events, and other special occasions.',
    },
  ];

  const values = [
    'Customer satisfaction',
    'High standards of quality',
    'Food quality and hygiene',
    'Continuous innovation',
    'Professional hospitality',
    'Attention to customer experience',
  ];

  const goals = [
    'Ensure customer satisfaction and build a repeat-customer base.',
    'Improve our position in the local market and strengthen our brand.',
    'Continuously improve our services on a daily basis.',
    'Develop effective marketing and promotional programs.',
    'Engage with the community through meaningful relationships and affiliations.',
  ];

  const salesStrategy = [
    'Word of mouth',
    'Discount coupons',
    'Free home delivery',
    'Focus on the customer experience',
    'Special offers and promotions',
  ];

  const competitiveEdge = [
    'Competitive pricing',
    'High-quality food',
    'Excellent environment and management',
    'Strong customer service',
    'Experienced culinary professionals',
    'Elegant and comfortable surroundings',
  ];

  const properties = [
    {
      name: 'The Signature Grand',
      location: 'Hari Nagar, New Delhi',
      image: '/images/signature-grand.jpg',
    },
    {
      name: 'SK Premium Park',
      location: 'Hari Nagar, New Delhi',
      image: '/images/sk-premium-park.jpg',
    },
    {
      name: 'SK Crown Park',
      location: 'Naraina, New Delhi',
      image: '/images/sk-crown-park.jpg',
    },
    {
      name: 'SK ROSELLA BANQUET',
      location: 'Rani Bagh, Delhi',
      image: '/images/sk-rosella-banquet1.jpg',
    },
    {
      name: 'SK ROSELLA BANQUET',
      location: 'Faridabad',
      image: '/images/sk-rosella-banquet2.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | SK Group of Hotels, Banquets & Resorts</title>

        <meta
          name="description"
          content="Discover the journey of SK Group of Hotels, Banquets & Resorts, founded by Mr. Vijay Kapoor. Explore our hospitality legacy, services, vision, objectives, and commitment to quality."
        />

        <meta
          name="keywords"
          content="SK Group Hotels, SK Group Banquets, SK Group Resorts, Vijay Kapoor, Hotels Delhi, Banquets Delhi, Catering Services, Wedding Banquets, Corporate Events"
        />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">

        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/about-hero.jpg"
              alt="SK Group of Hotels and Banquets"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />

                <span className="text-primary uppercase tracking-[0.3em] text-sm font-semibold">
                  About SK Group
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                A Legacy Built on
                <span className="block text-primary mt-2">
                  Hospitality & Excellence
                </span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
                From humble beginnings in 1991 to a growing group of hotels,
                banquets, resorts, and catering operations, SK Group has built
                its journey around hospitality, quality, customer satisfaction,
                and continuous growth.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                >
                  Plan Your Event
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
                >
                  Explore Our Gallery
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            CHAIRMAN PROFILE
        ========================================================= */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/vijay-kapoor.jpeg"
                    alt="Mr. Vijay Kapoor - Chairman"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Crown className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="font-serif text-lg font-bold">
                        Mr. Vijay Kapoor
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Chairman
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                  Leadership
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-7">
                  Meet Our Chairman
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    A much talented personality, <strong className="text-foreground">
                    Mr. Vijay Kapoor
                    </strong> is a successful entrepreneur with an enriching
                    experience of being one of the most successful names in the
                    banquet, hotel, and outdoor catering segment in the National
                    Capital Region.
                  </p>

                  <p>
                    His journey in the hospitality industry reflects a
                    commitment to excellence, innovation, and service. His
                    passion for food and hospitality developed early and became
                    the foundation for a professional journey dedicated to
                    creating memorable experiences for guests.
                  </p>

                  <p>
                    Beginning in 1991, Mr. Kapoor started his journey in the
                    catering and banquet business with modest weddings and
                    functions. Over the years, the business expanded into a
                    broader hospitality group serving guests across hotels,
                    banquets, resorts, and catering operations.
                  </p>

                  <p>
                    His leadership philosophy emphasizes delegation of
                    responsibility, participation at every level, and the
                    empowerment of teams to take decisions. This approach has
                    helped the group grow while maintaining a focus on
                    operational efficiency and customer satisfaction.
                  </p>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-secondary border border-border">
                  <p className="font-serif text-xl italic">
                    "Our vision is to provide high-class hospitality services
                    while continuously improving quality, innovation, and
                    customer satisfaction."
                  </p>

                  <p className="mt-3 text-sm text-muted-foreground">
                    — SK Group Hospitality Philosophy
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATS
        ========================================================= */}
        <section className="py-16 px-4 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="text-center p-6 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                      {stat.number}
                    </div>

                    <h3 className="font-semibold mt-2">
                      {stat.label}
                    </h3>

                    <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =========================================================
            OUR JOURNEY
        ========================================================= */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-16">
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                Our Journey
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4">
                From a Modest Beginning to a Growing Hospitality Group
              </h2>
            </div>

            <div className="relative">

              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              <div className="space-y-12">

                {/* 1991 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  <div className="md:text-right md:pr-12 pl-14 md:pl-0">
                    <span className="text-primary font-serif text-3xl font-bold">
                      1991
                    </span>

                    <h3 className="font-serif text-2xl font-bold mt-2">
                      The Beginning
                    </h3>

                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Mr. Vijay Kapoor began his journey in the hospitality and
                      catering sector, starting with weddings and small
                      functions.
                    </p>
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-1 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center md:-translate-x-1/2 z-10">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                </motion.div>

                {/* Growth */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  <div className="md:col-start-2 md:pl-12 pl-14">
                    <span className="text-primary font-serif text-3xl font-bold">
                      Growth
                    </span>

                    <h3 className="font-serif text-2xl font-bold mt-2">
                      Expanding the Hospitality Vision
                    </h3>

                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      The group gradually expanded its operations, moving from
                      banquet and catering services into hotels, resorts, and
                      other hospitality offerings.
                    </p>
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-1 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center md:-translate-x-1/2 z-10">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </motion.div>

                {/* Today */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  <div className="md:text-right md:pr-12 pl-14 md:pl-0">
                    <span className="text-primary font-serif text-3xl font-bold">
                      Today
                    </span>

                    <h3 className="font-serif text-2xl font-bold mt-2">
                      A Growing Hospitality Group
                    </h3>

                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      Today, SK Group continues to operate across hotels,
                      banquets, resorts, and catering services, with a strong
                      focus on quality, hygiene, innovation, and customer
                      satisfaction.
                    </p>
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-1 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center md:-translate-x-1/2 z-10">
                    <Award className="w-5 h-5" />
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================= */}
        <section className="py-20 md:py-28 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                What We Do
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4">
                Hospitality for Every Occasion
              </h2>

              <p className="text-muted-foreground mt-5 leading-relaxed">
                The group's experience extends across a diverse range of
                hospitality and event requirements, from weddings and social
                celebrations to corporate gatherings and hotel stays.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="bg-card p-7 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="font-serif text-xl font-bold">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =========================================================
            VISION & OBJECTIVES
        ========================================================= */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-3xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-7">
                  <Target className="w-7 h-7 text-primary" />
                </div>

                <h2 className="font-serif text-3xl font-bold mb-5">
                  Our Vision & Objectives
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our primary aim is to provide high-class hospitality
                  services that contribute to customer satisfaction and
                  sustainable growth.
                </p>

                <div className="space-y-4">
                  {values.map((value) => (
                    <div
                      key={value}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />

                      <span className="text-sm text-muted-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quality */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-3xl bg-secondary border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-7">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>

                <h2 className="font-serif text-3xl font-bold mb-5">
                  Quality & Hygiene
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Quality control and hygiene are central to our hospitality
                  approach. We aim to maintain high standards across food,
                  service, operations, and guest experience.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-card border border-border">
                    <Award className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-semibold">
                      Quality
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2">
                      Consistent standards across our services.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border">
                    <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                    <h4 className="font-semibold">
                      Hygiene
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2">
                      Strong focus on clean and responsible operations.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            GOALS & STRATEGY
        ========================================================= */}
        <section className="py-20 md:py-28 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-14">
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                Our Approach
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4">
                Goals, Sales & Competitive Strategy
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">

              {/* Goals */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <Target className="w-8 h-8 text-primary mb-6" />

                <h3 className="font-serif text-2xl font-bold mb-6">
                  Goals & Strategy
                </h3>

                <div className="space-y-4">
                  {goals.map((goal, index) => (
                    <div
                      key={goal}
                      className="flex gap-3"
                    >
                      <span className="text-primary font-bold">
                        {index + 1}.
                      </span>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {goal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sales */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <TrendingUp className="w-8 h-8 text-primary mb-6" />

                <h3 className="font-serif text-2xl font-bold mb-6">
                  Sales Strategy
                </h3>

                <div className="space-y-4">
                  {salesStrategy.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />

                      <p className="text-sm text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <Medal className="w-8 h-8 text-primary mb-6" />

                <h3 className="font-serif text-2xl font-bold mb-6">
                  Our Competitive Edge
                </h3>

                <div className="space-y-4">
                  {competitiveEdge.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />

                      <p className="text-sm text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            GROUP PROPERTIES
        ========================================================= */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                Our Properties
              </span>

              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-4">
                A Growing Hospitality Portfolio
              </h2>

              <p className="text-muted-foreground mt-5 leading-relaxed">
                Our profile showcases a selection of hotels and banquets that
                represent the group's hospitality journey and growing presence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">

              {properties.map((property, index) => (
                <motion.div
                  key={property.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold">
                      {property.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2">
                      {property.location}
                    </p>

                    <div className="flex items-center gap-2 mt-5 text-primary text-sm font-semibold">
                      <Hotel className="w-4 h-4" />
                      Hospitality & Events
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">

            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[50px] border-current" />
              <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full border-[60px] border-current" />
            </div>

            <div className="relative z-10 px-7 py-16 md:px-16 md:py-20 text-center">

              <Sparkles className="w-10 h-10 mx-auto mb-6" />

              <h2 className="font-serif text-3xl md:text-5xl font-bold">
                Let's Create Something Memorable
              </h2>

              <p className="max-w-2xl mx-auto mt-5 text-primary-foreground/80 leading-relaxed">
                Whether you are planning a wedding, reception, corporate
                gathering, or special celebration, our team is ready to help
                you create an experience that your guests will remember.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-background text-foreground font-semibold hover:opacity-90 transition"
                >
                  Contact Us
                </a>

                <a
                  href="/gallery"
                  className="px-7 py-3.5 rounded-full border border-primary-foreground/40 font-semibold hover:bg-primary-foreground/10 transition"
                >
                  View Gallery
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

/* Small reusable icon component for the services section */
const PartyPopperIcon = (props) => (
  <Sparkles {...props} />
);

export default AboutPage;