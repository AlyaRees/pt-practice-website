import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center py-30">
      {/* Background Image */}
        <Image
          src="/luxurious-gym-interior-stock_image.webp"
          alt="gym-interior"
          fill
          className="object-cover"
          priority
        />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-sm md:text-base uppercase tracking-widest text-primary-foreground/80 mb-4">
          Professional Services
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 leading-tight text-balance">
          Transforming Spaces,
          <br />
          Elevating Experiences
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-pretty">
          We deliver exceptional quality and craftsmanship in every project.
          Your vision, our expertise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
            <Link href="#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </button>
          <button className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="#services">View Our Work</Link>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
