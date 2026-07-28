"use client"

import { Briefcase, Code2, Layers, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Stats() {
  const { ref, isInView } = useInView<HTMLElement>()

  const stats = [
    { icon: Briefcase, value: "3+", label: "Years Experience" },
    { icon: Layers, value: "4", label: "Companies" },
    { icon: Code2, value: "20+", label: "Projects Shipped" },
    { icon: Users, value: "10+", label: "Tech Stack Tools" },
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-muted/80 border-y border-border" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isInView ? `${idx * 100}ms` : "0ms" }}
            >
              <Icon className="w-7 h-7 text-accent mb-4" strokeWidth={1.5} />
              <p className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm tracking-wide">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
