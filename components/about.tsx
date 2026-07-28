"use client"

import { useInView } from "@/hooks/use-in-view"

export function About() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <span
          className={`block text-accent font-bold text-sm mb-2 transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          02.
        </span>
        <h2
          className={`font-display text-4xl md:text-5xl font-extrabold text-foreground mb-10 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About
        </h2>

        <div className="max-w-3xl space-y-6">
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
          >
            I&apos;m a passionate and detail-oriented developer with over 3 years of experience building responsive,
            user-friendly web applications. My stack centers on React.js, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "220ms" : "0ms" }}
          >
            Currently studying Software Engineering at DHA SUFFA University. I&apos;ve shipped production work at
            Devio-Corps, AuraByte, Nexbash, and WAZ — translating design into clean, scalable code with a sharp eye on
            performance and UX.
          </p>
          <p
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "340ms" : "0ms" }}
          >
            Driven by the intersection of design and engineering — every interaction should feel intentional.
          </p>
        </div>
      </div>
    </section>
  )
}
