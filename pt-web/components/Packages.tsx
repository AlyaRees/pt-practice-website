import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const packages = [
  {
    title: "Group Classes",
    description: "Complete interior transformation with custom design solutions for residential and commercial spaces.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    title: "1:1 Sessions",
    description: "Expert renovation services to modernize and enhance your existing space with precision.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    title: "Padwork",
    description: "End-to-end project coordination ensuring timely delivery and budget compliance.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    title: "Online Personal Training",
    description: "Professional advice and strategic planning to help bring your vision to life.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  },
]

export function Packages() {
  return (
    <section className="py-20 pt-30 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">
              Our Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          {packages.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-card cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="border px-6 py-4 rounded-xl">
            <Link href="#contact">Contact Now</Link>
          </button>
        </div>
      </div>
    </section>
  )
}
