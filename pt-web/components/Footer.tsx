"use client"

import Link from "next/link"
import Icon from "../components/ui/Icons"

export function Footer() {
  return (
    <footer className=" text-white text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-serif font-semibold tracking-tight">
              Studio<span className="font-normal">Pro</span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm text-pretty">
              Transforming spaces and elevating experiences through exceptional design
              and craftsmanship since 2009.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Icon iconName="facebook"/>
              </Link>
              <Link href="#" className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Icon iconName="x"/>
              </Link>
              <Link href="#" className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Icon />
              </Link>
              <Link href="#" className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Icon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About
              </Link>
              <Link href="#work" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Our Work
              </Link>
              <Link href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <p>hello@studiopro.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Design Street, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Studio Pro. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Website made with care
          </p>
        </div>
      </div>
    </footer>
  )
}
