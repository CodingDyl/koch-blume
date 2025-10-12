"use client";

import { useState, useEffect } from "react";
import StaggeredMenu from "./StaggeredMenu";

export default function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'Facebook', link: 'https://facebook.com' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#1e2a3a"
      changeMenuColorOnOpen={true}
      colors={['#1e2a3a', '#2d3748', '#4a90e2']} // deep-navy, steel-blue variants
      logoUrl="/images/nav_logo.png"
      accentColor="#4a90e2" // steel-blue
      isFixed={true}
      enableScrollEffect={true}
      onMenuOpen={() => console.log('Menu opened')}
      onMenuClose={() => console.log('Menu closed')}
    />
  );
}
