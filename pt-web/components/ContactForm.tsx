"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-24 md:py-25 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@studiopro.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  123 Design Street, Suite 100
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location map"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-muted p-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border p-8 rounded-xl">
                  <label htmlFor="firstName">First Name</label>
                  <input className="border rounded-xl p-2" id="firstName" placeholder="Name" required />
                  <label htmlFor="lastName">Last Name</label>
                  <input className="border rounded-xl p-2" id="lastName" placeholder="Doe" required />
              <label htmlFor="email">Email</label>
                <input className="border rounded-xl p-2" id="email" type="email" placeholder="john@example.com" required />

                <label htmlFor="phone">Phone (Optional)</label>
                <input className="border rounded-xl p-2" id="phone" type="tel" placeholder="+1 (555) 000-0000" />

                <label htmlFor="message">Message</label>
                <textarea
                className="border rounded-xl p-2"
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <div className="border rounded-xl mt-4">
                    <div className="flex justify-center p-4">Send Message
                    <Send className="ml-2 h-6 w-6"/>
                    </div>
                  </div>
                )}
              </button>
          </form>
        </div>
      </div>
    </section>
  )
}
