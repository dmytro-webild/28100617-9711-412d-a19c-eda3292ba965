"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Users, Bike, TrendingUp, BarChart3, Package, Map } from "lucide-react";

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';


export default function AdminDashboardPage() {
  const navItems = [
    {
      name: "Home",      id: "/"},
    {
      name: "Services",      id: "/#services"},
    {
      name: "Track Package",      id: "/track"},
    {
      name: "Become a Rider",      id: "/riders"},
    {
      name: "About Us",      id: "/about-us"},
    {
      name: "Contact",      id: "/contact"},
    {
      name: "Admin Dashboard",      id: "/admin"},
  ];

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
            navItems={navItems}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            brandName="MOEX LOGISTICS"
          />
        </div>

        <div id="admin-dashboard-hero" data-section="admin-dashboard-hero">
            <MetricCardSeven
                animationType="depth-3d"
                textboxLayout="default"
                useInvertedBackground={true}
                title="Admin Dashboard Overview"
                description="Monitor key performance indicators, manage customers and riders, and access delivery analytics and reports."
                metrics={[
                    {
                        id: "total-customers",                        value: "10,500+",                        title: "Total Customers",                        items: ["Active: 8,000", "New this month: 500"]
                    },
                    {
                        id: "total-riders",                        value: "500+",                        title: "Total Riders",                        items: ["Active: 450", "Onboarding: 20"]
                    },
                    {
                        id: "deliveries-month",                        value: "15,000",                        title: "Deliveries this Month",                        items: ["Completed: 14,800", "Pending: 200"]
                    },
                    {
                        id: "revenue-month",                        value: "₦2.5M",                        title: "Revenue this Month",                        items: ["Target: ₦3M", "Growth: +15%"]
                    }
                ]}
            />
        </div>

        <div id="customer-management" data-section="customer-management">
            <FeatureBento
                animationType="blur-reveal"
                textboxLayout="default"
                useInvertedBackground={false}
                title="Customer Management"
                description="View and manage customer accounts, order history, and support requests."
                features={[
                    {
                        title: "New Customers",                        description: "Quick overview of recently joined customers.",                        bentoComponent: "icon-info-cards",                        items: [
                            { icon: Users, label: "John Doe", value: "New" },
                            { icon: Users, label: "Jane Smith", value: "Active" },
                            { icon: Users, label: "Alex Lee", value: "New" },
                            { icon: Users, label: "Sarah Kim", value: "Active" }
                        ]
                    },
                    {
                        title: "Customer Activity",                        description: "Track customer order frequency and value.",                        bentoComponent: "line-chart"
                    }
                ]}
            />
        </div>

        <div id="rider-management" data-section="rider-management">
            <FeatureBento
                animationType="blur-reveal"
                textboxLayout="default"
                useInvertedBackground={true}
                title="Rider Management"
                description="Monitor rider performance, manage availability, and assign deliveries."
                features={[
                    {
                        title: "Active Riders",                        description: "Riders currently online and available for deliveries.",                        bentoComponent: "icon-info-cards",                        items: [
                            { icon: Bike, label: "Rider A", value: "Online" },
                            { icon: Bike, label: "Rider B", value: "Online" },
                            { icon: Bike, label: "Rider C", value: "Offline" },
                            { icon: Bike, label: "Rider D", value: "Online" }
                        ]
                    },
                    {
                        title: "Rider Performance",                        description: "Delivery completion rates and average speed.",                        bentoComponent: "animated-bar-chart"
                    }
                ]}
            />
        </div>

        <div id="delivery-analytics" data-section="delivery-analytics">
            <FeatureBento
                animationType="blur-reveal"
                textboxLayout="default"
                useInvertedBackground={false}
                title="Delivery Analytics & Reporting"
                description="Gain insights into delivery trends, performance metrics, and generate custom reports."
                features={[
                    {
                        title: "Delivery Volume Trends",                        description: "Daily and weekly delivery trends.",                        bentoComponent: "line-chart"
                    },
                    {
                        title: "Delivery Status Breakdown",                        description: "Overview of delivery completion, in-transit, and failed rates.",                        bentoComponent: "animated-bar-chart"
                    },
                    {
                        title: "Top Delivery Routes",                        description: "Identify the most frequently used delivery routes.",                        bentoComponent: "map"
                    }
                ]}
            />
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
                        { label: "Admin Dashboard", href: "/admin" },
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