"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Clock, Gauge, Headphones, Map, MapPin, Pin, ShieldCheck, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/#services",
        },
        {
          name: "Track Package",
          id: "/track",
        },
        {
          name: "Become a Rider",
          id: "/riders",
        },
        {
          name: "About Us",
          id: "/about-us",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
      logoAlt="MOEX LOGISTICS Logo"
      brandName="MOEX LOGISTICS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "downward-rays-animated-grid",
      }}
      imagePosition="right"
      title="Fast, Reliable & Affordable Delivery Services"
      description="Get your package delivered anywhere in Ede within 5 hours. We also offer Osogbo, interstate, and nationwide deliveries."
      buttons={[
        {
          text: "Book a Delivery",
          href: "/#booking",
        },
        {
          text: "Track Package",
          href: "/track",
        },
        {
          text: "Become a Rider",
          href: "/riders",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cityscape-istanbul-turkey-photo-from-bird-s-eye-view_1153-5898.jpg"
      imageAlt="Modern logistics illustration with delivery riders and map"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-short-hair_273609-15371.jpg",
          alt: "Happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-man-posing_23-2148884307.jpg",
          alt: "Satisfied client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-short-hair_273609-15369.jpg",
          alt: "Business partner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",
          alt: "E-commerce user",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-african-american-businesswoman-smiling-happy-standing-city_839833-20095.jpg",
          alt: "Individual customer",
        },
      ]}
      avatarText="Join 100K+ Happy Customers & Riders"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Quick Service",
          icon: Clock,
        },
        {
          type: "text-icon",
          text: "Secure Deliveries",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Nationwide Reach",
          icon: Map,
        },
        {
          type: "text-icon",
          text: "Real-time Tracking",
          icon: Pin,
        },
        {
          type: "text-icon",
          text: "Dedicated Support",
          icon: Headphones,
        },
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "local",
          title: "Local Delivery",
          descriptions: [
            "Get your package delivered anywhere in Ede within 5 hours.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/high-speed-blurred-city-scape_272375-5411.jpg",
          imageAlt: "Local delivery rider in city",
        },
        {
          id: "campus",
          title: "Campus Delivery",
          descriptions: [
            "Dedicated and rapid delivery service for university campuses.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-drone-flying-green-field-forest_181624-61188.jpg",
          imageAlt: "Delivery on university campus",
        },
        {
          id: "interstate",
          title: "Interstate Delivery",
          descriptions: [
            "Reliable and secure package transport between states.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/red-semi-truck-driving-dusty-desert-highway-sunset_23-2152031813.jpg",
          imageAlt: "Cargo truck on highway",
        },
        {
          id: "nationwide",
          title: "Nationwide Delivery",
          descriptions: [
            "Extensive network ensuring coverage across all of Nigeria.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/map-afghanistan-gold-glitter-map-dark-background_559531-10561.jpg",
          imageAlt: "Map of Nigeria with delivery routes",
        },
        {
          id: "ecommerce",
          title: "E-commerce Delivery",
          descriptions: [
            "Seamless last-mile delivery solutions for your online store.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/manager-discussing-client-orders-detalis_482257-84168.jpg",
          imageAlt: "Customer receiving e-commerce package",
        },
        {
          id: "business",
          title: "Business Logistics",
          descriptions: [
            "Tailored logistics solutions for businesses of all sizes, including same-day options.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294526.jpg",
          imageAlt: "Business executive on logistics dashboard",
        },
      ]}
      title="Our World-Class Delivery Services"
      description="MOEX LOGISTICS offers a comprehensive suite of delivery options designed for speed, reliability, and affordability."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "speed",
          icon: Gauge,
          title: "Average Delivery Time",
          value: "Under 5 Hours",
        },
        {
          id: "satisfaction",
          icon: Smile,
          title: "Customer Satisfaction",
          value: "99.5%",
        },
        {
          id: "coverage",
          icon: MapPin,
          title: "Nationwide Coverage",
          value: "100%",
        },
      ]}
      title="Driven by Performance, Delivering Excellence"
      description="Our commitment to efficiency and customer satisfaction is reflected in every delivery we make."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Tech Solutions",
        "Global Partners",
        "Smart Mobility",
        "Urban Logistics",
        "Delivery Pros",
        "Express Fleet",
        "Cargo Connect",
      ]}
      title="Trusted by Leading Businesses"
      description="Join the growing list of companies that rely on MOEX LOGISTICS for seamless operations."
      showCard={true}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "CEO",
          company: "Tech Innovations",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-as-lawyer_23-2151202445.jpg",
          imageAlt: "Sarah Johnson, CEO of Tech Innovations",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Operations Manager",
          company: "Global Exports",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/popular-trendy-business-coach-posing-with-arms-folded_74855-3023.jpg",
          imageAlt: "Michael Chen, Operations Manager at Global Exports",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "E-commerce Founder",
          company: "Urban Market",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-business-thinking-creative-beauty-black-lady-african-american-girl-isolated-gray-background_640221-36.jpg",
          imageAlt: "Emily Rodriguez, E-commerce Founder of Urban Market",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Logistics Coordinator",
          company: "Swift Supply Co.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/headshot-handsome-young-unshaven-african-male-wearing-casual-cozy-sweater_273609-9400.jpg",
          imageAlt: "David Kim, Logistics Coordinator at Swift Supply Co.",
        },
        {
          id: "5",
          name: "Aisha Bello",
          role: "Small Business Owner",
          company: "Ede Crafts",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-attractive-charismatic-woman-isolated_273609-34926.jpg",
          imageAlt: "Aisha Bello, Small Business Owner of Ede Crafts",
        },
        {
          id: "6",
          name: "Kunle Adeyemi",
          role: "Logistics Manager",
          company: "SwiftDrop Services",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-entrepreneur-smiling-camera_482257-120987.jpg",
          imageAlt: "Kunle Adeyemi, Logistics Manager at SwiftDrop Services",
        },
      ]}
      title="What Our Customers Say"
      description="Hear directly from businesses and individuals who trust MOEX LOGISTICS for their delivery needs."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
      logoAlt="MOEX LOGISTICS Logo"
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Services",
              href: "/#services",
            },
            {
              label: "About Us",
              href: "/about-us",
            },
          ],
        },
        {
          items: [
            {
              label: "Track Package",
              href: "/track",
            },
            {
              label: "Become a Rider",
              href: "/riders",
            },
            {
              label: "Book a Delivery",
              href: "/#booking",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="MOEX LOGISTICS"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
