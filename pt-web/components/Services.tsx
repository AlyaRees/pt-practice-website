import Link from "next/link"
import { Card } from "./ui/Card"
import { Palette, Lightbulb, Wrench, Award } from "lucide-react"

const offerings = [
  {
    icon: Palette,
    title: "Design",
    description: "Custom design solutions tailored to your unique needs and aesthetic preferences.",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Expert guidance to help you make informed decisions for your project.",
  },
  {
    icon: Wrench,
    title: "Implementation",
    description: "Professional execution with attention to every detail and quality standards.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure excellence in every deliverable.",
  },
]

export function WhatWeOffer() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive solutions designed to meet your unique requirements with
            excellence and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offerings.map((offering, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-foreground/20">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <offering.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{offering.title}</h3>
                <p className="text-sm text-muted-foreground">{offering.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button>
            <Link href="#contact">Contact Now</Link>
          </button>
        </div>
      </div>
    </section>
  )
}
