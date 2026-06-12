"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Building, Car, Package } from "lucide-react";

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

  <div id="about-moex" data-section="about-moex">
      <TextSplitAbout
      useInvertedBackground={false}
      title="About MOEX LOGISTICS: Your Trusted Delivery Partner"
      description={[
        "MOEX LOGISTICS is revolutionizing delivery services across Nigeria, starting with fast and reliable local deliveries in Ede and Osogbo, and expanding nationwide. Our mission is to provide an unparalleled logistics experience, integrating cutting-edge technology with a customer-first approach.",        "We are dedicated to building a platform that empowers both customers and riders. For customers, we offer transparent, real-time tracking, seamless booking, and a network of trusted riders. For our riders, we provide a flexible, lucrative marketplace supported by advanced tools for efficient job management and fair earnings."]}
      showBorder={false}
    />
  </div>

  <div id="company-achievements" data-section="company-achievements">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "cities-served",          icon: Building,
          title: "Cities Served",          value: "15+"},
        {
          id: "packages-delivered",          icon: Package,
          title: "Packages Delivered",          value: "100K+"},
        {
          id: "active-riders",          icon: Car,
          title: "Active Riders",          value: "500+"},
      ]}
      title="Our Journey So Far"
      description="Since our inception, MOEX LOGISTICS has been committed to setting new standards in the delivery industry."
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
