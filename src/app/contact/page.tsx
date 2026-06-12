"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

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

  <div id="contact-us-form" data-section="contact-us-form">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="How Can We Help You?"
      description="Whether you have a question about our services, need support with a delivery, or want to partner with us, our team is ready to assist."
      imageSrc="http://img.b2bpic.net/free-photo/top-view-paper-style-community-map_23-2149377694.jpg"
      imageAlt="Map showing MOEX LOGISTICS location"
      mediaAnimation="slide-up"
      mediaPosition="left"
      inputPlaceholder="Enter your inquiry"
      buttonText="Send Message"
      termsText="By clicking Send Message you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="general-faq" data-section="general-faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What areas do you serve?",
          content: "We currently offer local delivery in Ede and Osogbo, with interstate and nationwide delivery options available across Nigeria.",
        },
        {
          id: "2",
          title: "How can I pay for my delivery?",
          content: "We support secure payments via Paystack, Flutterwave, and direct bank transfers.",
        },
        {
          id: "3",
          title: "Do you offer business accounts?",
          content: "Yes, we provide specialized business accounts with custom logistics solutions and API integration options.",
        },
        {
          id: "4",
          title: "Is my package insured?",
          content: "All packages are handled with utmost care. Please refer to our Terms and Conditions for detailed insurance policies.",
        },
        {
          id: "5",
          title: "How do I become a rider?",
          content: "Visit our 'Become a Rider' page to register, submit your details, and join our growing team of delivery professionals.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/call-center-senior-agent-dealing-with-unhappy-customers-listening-issues_482257-126067.jpg"
      imageAlt="Customer service and FAQ support"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="General Inquiries & Support"
      description="Browse our frequently asked questions for quick answers to common topics about MOEX LOGISTICS."
      faqsAnimation="blur-reveal"
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
