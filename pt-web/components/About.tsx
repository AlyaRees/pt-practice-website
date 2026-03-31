import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/samuel-girven-Ppua0I4VjqE-unsplash.jpg"
                alt="Professional portrait"
                width={640}
                height={800}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-foreground rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Dedicated to Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                With over 15 years of experience in the industry, we have built a reputation
                for delivering exceptional quality and service. Our commitment to craftsmanship
                and attention to detail sets us apart.
              </p>
              <p className="text-pretty">
                We believe in building lasting relationships with our clients, understanding
                their unique needs, and exceeding their expectations on every project. Our
                team brings together diverse expertise and a shared passion for excellence.
              </p>
              <p className="text-pretty">
                From initial consultation to final delivery, we are with you every step of
                the way, ensuring a seamless and satisfying experience.
              </p>
            </div>
            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-serif">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif">500+</p>
                <p className="text-sm text-muted-foreground">Hours of training</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
