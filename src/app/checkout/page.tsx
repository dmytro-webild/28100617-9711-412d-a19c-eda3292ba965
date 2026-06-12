"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function CheckoutPage() {
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
                name: "Home",                id: "/"},
              {
                name: "Services",                id: "/#services"},
              {
                name: "Track Package",                id: "/track"},
              {
                name: "Checkout",                id: "/checkout"},
              {
                name: "Become a Rider",                id: "/riders"},
              {
                name: "About Us",                id: "/about-us"},
              {
                name: "Contact",                id: "/contact"},
            ]}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            brandName="MOEX LOGISTICS"
          />
        </div>

        <div className="relative flex min-h-[50vh] flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Secure Checkout</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Proceed with your payment using our integrated gateways. We support Paystack and Flutterwave for fast and secure transactions.
          </p>
          <div className="space-y-4 max-w-md w-full">
            <button className="px-6 py-3 bg-primary-cta text-white rounded-lg shadow-md hover:bg-primary-cta/90 transition-colors w-full">
              Pay with Paystack
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors w-full">
              Pay with Flutterwave
            </button>
          </div>
          <p className="mt-8 text-sm text-foreground/60">
            Your transaction details will be securely handled and verified.
          </p>
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            columns={[
              {
                items: [
                  {
                    label: "Home",                    href: "/"},
                  {
                    label: "Services",                    href: "/#services"},
                  {
                    label: "About Us",                    href: "/about-us"},
                ],
              },
              {
                items: [
                  {
                    label: "Track Package",                    href: "/track"},
                  {
                    label: "Become a Rider",                    href: "/riders"},
                  {
                    label: "Book a Delivery",                    href: "/#booking"},
                ],
              },
              {
                items: [
                  {
                    label: "Contact Us",                    href: "/contact"},
                  {
                    label: "Privacy Policy",                    href: "#"},
                  {
                    label: "Terms of Service",                    href: "#"},
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
