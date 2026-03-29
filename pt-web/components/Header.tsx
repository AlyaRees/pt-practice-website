"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center md:h-20 bg-black justify-between text-white px-6 m-auto">
        <div className="w-full flex items-center gap-2">
          <div className="flex pr-6">
          <Image className="w-10 lg:w-10" src="/placeholderLogo.svg" alt="logo" width={40} height={15} />
          </div>
          <Link href="/" className="text-xl">
            ArcherMan<span className="font-normal">Fitness</span>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex pr-10">
          <nav className="flex text-sm gap-6">
            <Link href="#work">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          </div>

          {/* Social Icons + Contact Button */}
            <span className="hidden md:flex gap-6">
                <FaInstagram size={24}/>
                <FaFacebook size={24}/>
                <FaTwitter size={24}/>
            </span>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 md:hidden" />
            ) : (
              <Menu className="h-6 w-6 md:hidden" />
            )}
          </button>
        

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-15 left-1/2 -translate-x-1/2 md:hidden bg-foreground py-6">

            <nav className="flex flex-col items-center gap-4 text-sm text-white md:px-9 px-40">
              <Link
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
    </header>
  );
}
