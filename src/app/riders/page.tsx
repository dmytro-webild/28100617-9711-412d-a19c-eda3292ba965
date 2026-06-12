"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { useState } from 'react';
import { BadgeCheck, Clock, DollarSign, MapPin, Package } from "lucide-react";

export default function RiderDashboardPage() {
  const [isOnline, setIsOnline] = useState(false);
  const [activeJobs, setActiveJobs] = useState<Array<{ id: string; pickup: string; dropoff: string; status: 'pending' | 'accepted' }>>([
    // { id: 'job1', pickup: '123 Main St, Ede', dropoff: '456 Oak Ave, Ede', status: 'pending' },
  ]);
  const [earnings, setEarnings] = useState(150.75); // Example earnings

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
    if (!isOnline) {
      // Simulate fetching new jobs when going online
      setTimeout(() => {
        setActiveJobs([
          { id: 'job1', pickup: '123 Main St, Ede', dropoff: '456 Oak Ave, Ede', status: 'pending' },
          { id: 'job2', pickup: '789 Elm St, Ede', dropoff: '101 Pine Rd, Ede', status: 'pending' },
        ]);
      }, 1000);
    } else {
      setActiveJobs([]); // Clear jobs when going offline, or manage as per business logic
    }
  };

  const acceptJob = (jobId: string) => {
    setActiveJobs(currentJobs =>
      currentJobs.map(job =>
        job.id === jobId ? { ...job, status: 'accepted' } : job
      )
    );
    // Simulate API call for job acceptance
    console.log(`Job ${jobId} accepted`);
  };

  const completeJob = (jobId: string) => {
    setActiveJobs(currentJobs =>
      currentJobs.filter(job => job.id !== jobId)
    );
    setEarnings(prev => prev + 10.50); // Example earning for a completed job
    // Simulate API call for job completion
    console.log(`Job ${jobId} completed`);
  };

  const dashboardNavItems = [
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
  ];

  const footerColumns = [
    {
      items: [
        {
          label: "Home",          href: "/"},
        {
          label: "Services",          href: "/#services"},
        {
          label: "About Us",          href: "/about-us"},
      ],
    },
    {
      items: [
        {
          label: "Track Package",          href: "/track"},
        {
          label: "Become a Rider",          href: "/riders"},
        {
          label: "Book a Delivery",          href: "/#booking"},
      ],
    },
    {
      items: [
        {
          label: "Contact Us",          href: "/contact"},
        {
          label: "Privacy Policy",          href: "#"},
        {
          label: "Terms of Service",          href: "#"},
      ],
    },
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
            navItems={dashboardNavItems}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            brandName="MOEX LOGISTICS"
          />
        </div>

        <main className="min-h-screen py-24 px-4 md:px-8 lg:px-16 container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Rider Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Status Toggle */}
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Online Status</h2>
              <button
                onClick={toggleOnlineStatus}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${
                  isOnline
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                {isOnline ? 'Go Offline' : 'Go Online'}
              </button>
              <p className={`mt-4 text-xl font-bold ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
                {isOnline ? 'You are Online' : 'You are Offline'}
              </p>
            </div>

            {/* Earnings Tracker */}
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <DollarSign className="w-12 h-12 text-primary-cta mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-foreground">Total Earnings</h2>
              <p className="text-5xl font-extrabold text-primary-cta">₦{earnings.toFixed(2)}</p>
            </div>

            {/* Active Jobs Summary */}
            <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
              <Package className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-foreground">Active Jobs</h2>
              <p className="text-5xl font-extrabold text-accent">{activeJobs.length}</p>
            </div>
          </div>

          {/* Active Jobs Display */}
          <div className="mt-16 bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-foreground">Current Deliveries</h2>
            {activeJobs.length === 0 ? (
              <p className="text-center text-lg text-foreground-lighter">No active jobs at the moment. Go online to see new requests!</p>
            ) : (
              <div className="space-y-6">
                {activeJobs.map((job) => (
                  <div key={job.id} className="border border-background-accent p-6 rounded-lg flex flex-col md:flex-row justify-between items-center bg-background-accent/20">
                    <div className="text-foreground flex-grow text-center md:text-left mb-4 md:mb-0">
                      <p className="text-lg font-medium flex items-center justify-center md:justify-start">
                        <MapPin className="mr-2 text-primary-cta" size={20} /> Pickup: {job.pickup}
                      </p>
                      <p className="text-lg font-medium mt-2 flex items-center justify-center md:justify-start">
                        <MapPin className="mr-2 text-secondary-cta" size={20} /> Dropoff: {job.dropoff}
                      </p>
                      <p className="text-base text-foreground-lighter mt-2">Status: <span className="capitalize font-semibold">{job.status}</span></p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {job.status === 'pending' && isOnline && (
                        <button
                          onClick={() => acceptJob(job.id)}
                          className="px-5 py-2 bg-primary-cta text-white rounded-md hover:bg-primary-cta/80 transition-colors duration-200 flex items-center justify-center"
                        >
                          <BadgeCheck className="mr-2" size={20} /> Accept Job
                        </button>
                      )}
                      {job.status === 'accepted' && (
                        <button
                          onClick={() => completeJob(job.id)}
                          className="px-5 py-2 bg-secondary-cta text-white rounded-md hover:bg-secondary-cta/80 transition-colors duration-200 flex items-center justify-center"
                        >
                          <Clock className="mr-2" size={20} /> Mark as Complete
                        </button>
                      )}
                      {!isOnline && job.status === 'pending' && (
                         <span className="text-sm text-center md:text-right text-foreground-lighter">Go online to accept jobs.</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hm12l6"
            logoAlt="MOEX LOGISTICS Logo"
            columns={footerColumns}
            logoText="MOEX LOGISTICS"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
