import Link from "next/link"
import { Card } from "./ui/Card"
import { Palette, Lightbulb, Wrench, Award } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "1:1 Sessions",
    description: "Custom design solutions tailored to your unique needs and aesthetic preferences.",
  },
  {
    icon: Lightbulb,
    title: "Padwork",
    description: "Expert guidance to help you make informed decisions for your project.",
  },
  {
    icon: Wrench,
    title: "Personal training",
    description: "Professional execution with attention to every detail and quality standards.",
  },
  {
    icon: Award,
    title: "Group Training",
    description: "Rigorous quality checks to ensure excellence in every deliverable.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-8 md:py-15 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-15">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:mb-15 md:p-0 p-10">
          {services.map((offering, index) => (
            <Card key={index}>
              <div className="p-10 md:p-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-1">
                  <offering.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{offering.title}</h3>
                <p className="text-sm text-muted-foreground">{offering.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="rounded-lg border p-4">
            <Link href="#contact">Contact Now</Link>
          </button>
        </div>
      </div>
    </section>
  )
}
