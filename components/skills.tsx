"use client"

import { useState } from "react"
import { Code2, Server, Wrench } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Skills() {
  const { ref, isInView } = useInView<HTMLElement>()
  const [active, setActive] = useState(0)

  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      description:
        "Building responsive, high-performance UIs with React.js, Next.js, TypeScript, Tailwind CSS, and Redux.",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: Server,
      description:
        "APIs, auth, and data layers with Node.js, MongoDB, SQL, Hasura, JWT/OAuth, and solid API integration.",
      skills: ["Node.js", "MongoDB", "SQL", "Hasura", "JWT/OAuth", "API Integration"],
    },
    {
      category: "DevOps & Tools",
      icon: Wrench,
      description:
        "Infrastructure and ops tooling including Terraform, procurement management tools, SSR/SEO, and performance.",
      skills: ["Terraform", "Procurement Management Tools", "Vue.js", "Python", "SSR/SEO", "Performance"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-28 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span
              className={`block text-accent font-bold text-sm mb-2 transition-all duration-700 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
            >
              01.
            </span>
            <h2
              className={`font-display text-4xl md:text-5xl font-extrabold text-foreground transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Skills
            </h2>
          </div>
          <a
            href="#experience"
            className={`text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            View Experience →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            const isActive = active === idx
            return (
              <button
                key={cat.category}
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className={`text-left p-8 md:p-10 rounded-md transition-all duration-300 group ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20 scale-[1.02]"
                    : "bg-card text-foreground hover:bg-secondary"
                } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isInView ? `${idx * 100}ms` : "0ms" }}
              >
                <Icon className={`w-10 h-10 mb-6 ${isActive ? "text-accent-foreground" : "text-accent"}`} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold mb-3">{cat.category}</h3>
                <p className={`text-sm leading-relaxed mb-5 ${isActive ? "text-accent-foreground/90" : "text-muted-foreground"}`}>
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-sm ${
                        isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
