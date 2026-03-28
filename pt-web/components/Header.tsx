"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white">
      <div className="md:px-6 pt-6 md:pt-0">
        <div className="flex items-center justify-center md:justify-between md:h-20">
          <Image className="w-10 lg:w-10" src="/placeholderLogo.svg" alt="logo" width={40} height={15} />
          <Link href="/" className="text-xl px-10">
            ArcherMan<span className="font-normal">Fitness</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-sm ml-auto pr-20">
            <Link href="#work">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          {/* Social Icons + Contact Button */}
          <div>
              <Link href="#"></Link>
              <Link href="#"></Link>
              <Link href="#"></Link>
            <span className="hidden md:flex gap-6 justify-center">
                <FaInstagram size={24}/>
                <FaFacebook size={24}/>
                <FaTwitter size={24}/>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-6 w-6 md:hidden" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-6 text-white">
              <Link
                href="#services"
                className="text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4 mt-6 pt-2 border-t">
              <Link href="#"></Link>
              <Link href="#"></Link>
              <Link href="#"></Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
