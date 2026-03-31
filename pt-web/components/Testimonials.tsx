"use client"
import { Quote } from "lucide-react"
import Image from "next/image"

export function Testimonials() {

  return (
    <section id="work" className="py-24 md:py-15 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Client testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            See the Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/seyi-ariyo-ovo6J5KJbg0-unsplash.jpg"
              alt="before transformation"
              width={640}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/anton-acosta-CR9IgzPiUcI-unsplash.jpg"
              alt="After transformation"
              width={640}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mx-8 py-10">
            <Quote className="h-10 w-10 mb-6"/>
            <blockquote className="text-xl md:text-2xl">
              &quot;Working with Studio Pro was an absolute pleasure. They transformed our space
              beyond our expectations. Their attention to detail and professionalism is
              unmatched.&quot;
            </blockquote>
              <div>
                <p className="flex items-center gap-4 font-semibold py-4 ">- Michael Thompson</p>
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/seyi-ariyo-ovo6J5KJbg0-unsplash.jpg"
              alt="before transformation"
              width={640}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/anton-acosta-CR9IgzPiUcI-unsplash.jpg"
              alt="After transformation"
              width={640}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mx-8 py-10">
            <Quote className="h-10 w-10 mb-6"/>
            <blockquote className="text-xl md:text-2xl">
              &quot;Working with Studio Pro was an absolute pleasure. They transformed our space
              beyond our expectations. Their attention to detail and professionalism is
              unmatched.&quot;
            </blockquote>
              <div>
                <p className="flex items-center gap-4 font-semibold py-4">- Michael Thompson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
