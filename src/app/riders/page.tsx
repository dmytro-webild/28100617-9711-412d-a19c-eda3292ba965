"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import { Award, Crown } from "lucide-react";

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

  <div id="rider-marketplace-features" data-section="rider-marketplace-features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "register-verify",          title: "Easy Registration & Verification",          descriptions: [
            "Quickly sign up and get verified with our streamlined process."],
          imageSrc: "http://img.b2bpic.net/free-photo/mobile-app-location-digital-art_23-2151762859.jpg",          imageAlt: "rider app dashboard ui design"},
        {
          id: "flexible-work",          title: "Flexible Online/Offline Status",          descriptions: [
            "Manage your availability and accept jobs that fit your schedule."],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6&_wi=2",          imageAlt: "rider app dashboard ui design"},
        {
          id: "delivery-requests",          title: "Receive Nearby Delivery Requests",          descriptions: [
            "Get instant notifications for jobs in your immediate vicinity."],
          imageSrc: "http://img.b2bpic.net/free-photo/cityscape-istanbul-turkey-photo-from-bird-s-eye-view_1153-5898.jpg?_wi=2",          imageAlt: "rider app dashboard ui design"},
        {
          id: "google-maps-nav",          title: "Integrated Google Maps Navigation",          descriptions: [
            "Effortlessly navigate to pickup and delivery locations with real-time routing."],
          imageSrc: "http://img.b2bpic.net/free-photo/high-speed-blurred-city-scape_272375-5411.jpg?_wi=2",          imageAlt: "rider app dashboard ui design"},
        {
          id: "earnings-withdrawal",          title: "View Earnings & Easy Withdrawal",          descriptions: [
            "Track your income and withdraw your earnings securely and conveniently."],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-drone-flying-green-field-forest_181624-61188.jpg?_wi=2",          imageAlt: "rider app dashboard ui design"},
        {
          id: "performance-tracking",          title: "Track Delivery Performance",          descriptions: [
            "Monitor your success rate, ratings, and completed jobs to optimize your work."],
          imageSrc: "http://img.b2bpic.net/free-photo/red-semi-truck-driving-dusty-desert-highway-sunset_23-2152031813.jpg?_wi=2",          imageAlt: "rider app dashboard ui design"},
      ]}
      title="Join the MOEX LOGISTICS Rider Community"
      description="Become a part of our elite delivery network. Enjoy flexible work, competitive earnings, and cutting-edge tools designed for your success."
    />
  </div>

  <div id="rider-earnings" data-section="rider-earnings">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "standard-rider",          badge: "Standard",          badgeIcon: Award,
          price: "80% Commission",          subtitle: "Keep most of your earnings",          buttons: [
            {
              text: "Join Standard",              href: "/riders#register"},
          ],
          features: [
            "Standard job priority",            "Weekly payouts",            "Access to basic support",            "Flexible hours",            "Ede & Osogbo deliveries"],
        },
        {
          id: "premium-rider",          badge: "Premium",          badgeIcon: Crown,
          price: "85% Commission",          subtitle: "Unlock higher earning potential",          buttons: [
            {
              text: "Become Premium",              href: "/riders#register"},
          ],
          features: [
            "Priority job access",            "Daily payouts",            "24/7 Premium support",            "Nationwide opportunities",            "Exclusive bonuses"],
        },
      ]}
      title="Maximize Your Earnings as a MOEX Rider"
      description="Choose a plan that suits your goals and start earning more with every delivery you complete."
    />
  </div>

  <div id="our-rider-team" data-section="our-rider-team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "all-riders",          groupTitle: "Ede & Osogbo Teams",          members: [
            {
              id: "rider-1",              title: "Ayo Dele",              subtitle: "Lead Rider, Ede",              detail: "5000+ Deliveries",              imageSrc: "http://img.b2bpic.net/free-photo/happy-good-looking-african-entrepreneur-riding-bike-urban-setting-his-way-office-successful-dark-skinned-employee-enjoying-city-ride-black-bicycle-commuting-work-summer-day_273609-871.jpg",              imageAlt: "Ayo Dele, Lead Rider"},
            {
              id: "rider-2",              title: "Chioma Nnadi",              subtitle: "Senior Rider, Osogbo",              detail: "3500+ Deliveries",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-courier-yellow-shirt-red-cape-holding-package-notepad-smiling-blue-space-job_140725-29145.jpg",              imageAlt: "Chioma Nnadi, Senior Rider"},
            {
              id: "rider-3",              title: "Emeka Obi",              subtitle: "Rider Team Lead",              detail: "2000+ Deliveries",              imageSrc: "http://img.b2bpic.net/free-photo/young-african-american-delivery-man-wearing-red-polo-shirt-cap-holding-stack-pizza-boxes-showing-smartphone-hand-camera-with-smile-face-isolated-orange_141793-9811.jpg",              imageAlt: "Emeka Obi, Rider Team Lead"},
            {
              id: "rider-4",              title: "Fatima Musa",              subtitle: "Expert Rider",              detail: "4000+ Deliveries",              imageSrc: "http://img.b2bpic.net/free-photo/male-photographer-exploring-urban-environment-with-grunge-aesthetic_23-2150943508.jpg",              imageAlt: "Fatima Musa, Expert Rider"},
            {
              id: "rider-5",              title: "Idris Bello",              subtitle: "Dispatch Specialist",              detail: "2500+ Deliveries",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-african-american-female-courier-making-delivery-looking-camera_637285-2096.jpg",              imageAlt: "Idris Bello, Dispatch Specialist"},
          ]
        },
      ]}
      title="Meet Our Dedicated Riders"
      description="Our riders are the heartbeat of MOEX LOGISTICS, committed to fast, safe, and friendly deliveries."
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
