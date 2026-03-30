import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center">
      {/* Background Image */}
        <Image
          src="/abdul-raheem-kannath-abdoyNbzAnM-unsplash (1).jpg"
          alt="gym-interior"
          width={1920}
          height={1280}
          className="w-full max-h-[80vh] object-cover"
        />
    </section>
  )
}
