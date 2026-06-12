"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import Input from '@/components/form/Input';
import ButtonDirectionalHover from '@/components/button/ButtonDirectionalHover/ButtonDirectionalHover';
import { useState } from "react";

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [riderInfo, setRiderInfo] = useState(null);

  const handleTrack = () => {
    // Simulate API call for tracking
    console.log("Tracking ID:", trackingId);
    setTrackingInfo({
      id: trackingId,
      status: "In Transit",      currentLocation: "Ede, Osun State",      estimatedDelivery: "2 hours",      history: ["Order placed", "Picked up", "En route"],
    });
    setRiderInfo({
      name: "John Doe",      vehicle: "Motorcycle",      currentLocation: { lat: 7.7479, lng: 4.5422 }, // Example coordinates for Ede
      contact: "+2348012345678"});
    // In a real app, this would trigger Google Maps API to update the map
  };

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
              { name: "Home", id: "/" },
              { name: "Services", id: "/#services" },
              { name: "Track Package", id: "/track" },
              { name: "Become a Rider", id: "/riders" },
              { name: "About Us", id: "/about-us" },
              { name: "Contact", id: "/contact" },
            ]}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            brandName="MOEX LOGISTICS"
          />
        </div>

        <div id="tracking-section" data-section="tracking-section" className="py-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Real-time Package & Rider Tracking</h1>
          <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Enter your tracking ID to see your package's live location and estimated delivery.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
            <Input
              value={trackingId}
              onChange={setTrackingId}
              placeholder="Enter Tracking ID"
              className="flex-grow max-w-md"
            />
            <ButtonDirectionalHover
              text="Track Package"
              onClick={handleTrack}
              className="px-6 py-3"
            />
          </div>

          {trackingInfo && (
            <div className="bg-card p-6 rounded-lg shadow-lg mb-10 border border-border">
              <h2 className="text-2xl font-semibold mb-4">Package Details</h2>
              <p className="mb-2"><strong>ID:</strong> {trackingInfo.id}</p>
              <p className="mb-2"><strong>Status:</strong> {trackingInfo.status}</p>
              <p className="mb-2"><strong>Current Location:</strong> {trackingInfo.currentLocation}</p>
              <p className="mb-2"><strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Tracking History:</h3>
              <ul className="list-disc pl-5">
                {trackingInfo.history.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>
          )}

          {riderInfo && (
            <div className="bg-card p-6 rounded-lg shadow-lg mb-10 border border-border">
              <h2 className="text-2xl font-semibold mb-4">Rider Details</h2>
              <p className="mb-2"><strong>Name:</strong> {riderInfo.name}</p>
              <p className="mb-2"><strong>Vehicle:</strong> {riderInfo.vehicle}</p>
              <p className="mb-2"><strong>Contact:</strong> {riderInfo.contact}</p>
            </div>
          )}

          <div className="relative h-[500px] w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden flex items-center justify-center text-gray-500">
            <p className="text-center text-lg">
              Google Map Integration Placeholder (Map would load here showing package & rider locations)
            </p>
            {/* Actual Google Map would be initialized here using useEffect and Google Maps API */}
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            columns={[
              {
                items: [
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/#services" },
                  { label: "About Us", href: "/about-us" },
                ],
              },
              {
                items: [
                  { label: "Track Package", href: "/track" },
                  { label: "Become a Rider", href: "/riders" },
                  { label: "Book a Delivery", href: "/#booking" },
                ],
              },
              {
                items: [
                  { label: "Contact Us", href: "/contact" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
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
