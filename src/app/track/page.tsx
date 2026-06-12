"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
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
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/#services"},
        {
          name: "Track Package",          id: "/track"},
        {
          name: "Become a Rider",          id: "/riders"},
        {
          name: "About Us",          id: "/about-us"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
      logoAlt="MOEX LOGISTICS Logo"
      brandName="MOEX LOGISTICS"
    />
  </div>

  <div id="real-time-tracking" data-section="real-time-tracking">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "tracking-number",          title: "Enter Tracking Number",          descriptions: [
            "Instantly retrieve your package status with a unique tracking ID."],
          imageSrc: "http://img.b2bpic.net/free-photo/human-hand-holding-mobile-phone-with-map-gps-navigation-screen_23-2147837116.jpg",          imageAlt: "real time package tracking ui"},
        {
          id: "live-status",          title: "Live Status Updates",          descriptions: [
            "Receive notifications when your package is picked up, in transit, and delivered."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6",          imageAlt: "real time package tracking ui"},
        {
          id: "google-maps-location",          title: "Google Maps Location",          descriptions: [
            "View the precise location of your package on an interactive map."],
          imageSrc: "http://img.b2bpic.net/free-photo/cityscape-istanbul-turkey-photo-from-bird-s-eye-view_1153-5898.jpg",          imageAlt: "real time package tracking ui"},
        {
          id: "eta",          title: "Estimated Time of Arrival (ETA)",          descriptions: [
            "Get accurate predictions for when your package will arrive."],
          imageSrc: "http://img.b2bpic.net/free-photo/high-speed-blurred-city-scape_272375-5411.jpg",          imageAlt: "real time package tracking ui"},
        {
          id: "rider-info",          title: "Rider Information",          descriptions: [
            "Access rider name, contact details, and rating for transparency."],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-drone-flying-green-field-forest_181624-61188.jpg",          imageAlt: "real time package tracking ui"},
        {
          id: "call-chat-rider",          title: "Call or Chat with Rider",          descriptions: [
            "Direct communication with your rider for any urgent queries."],
          imageSrc: "http://img.b2bpic.net/free-photo/red-semi-truck-driving-dusty-desert-highway-sunset_23-2152031813.jpg",          imageAlt: "real time package tracking ui"},
      ]}
      title="Real-Time Package Tracking & Live Rider View"
      description="Stay informed every step of the way with our advanced tracking system. See your package on a live map, get real-time updates, and know your rider."
    />
  </div>

  <div id="tracking-faq" data-section="tracking-faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "How do I track my package?",          content: "Simply enter your unique tracking number into the designated field on our tracking page to get real-time updates."},
        {
          id: "2",          title: "Can I contact my rider directly?",          content: "Yes, once your delivery is active, you will have options to call or chat directly with your assigned rider."},
        {
          id: "3",          title: "What if my ETA changes?",          content: "Our system provides live updates, so any changes to your Estimated Time of Arrival will be reflected instantly."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-call-center-with-headphones-computer_23-2149256099.jpg"
      imageAlt="Customer service representative helping client"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Tracking & Support FAQs"
      description="Find answers to common questions about tracking your delivery, rider interactions, and more."
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
              label: "Home",              href: "/"},
            {
              label: "Services",              href: "/#services"},
            {
              label: "About Us",              href: "/about-us"},
          ],
        },
        {
          items: [
            {
              label: "Track Package",              href: "/track"},
            {
              label: "Become a Rider",              href: "/riders"},
            {
              label: "Book a Delivery",              href: "/#booking"},
          ],
        },
        {
          items: [
            {
              label: "Contact Us",              href: "/contact"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
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
