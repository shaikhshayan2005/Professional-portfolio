"use client"

import { useInView } from "@/hooks/use-in-view"

export function Experience() {
  const { ref, isInView } = useInView<HTMLElement>()

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "WAZ",
      duration: "Nov 2025 - Present",
      description:
        "Building full-stack web apps focused on procurement workflows. Integrated procurement management tools to streamline purchasing, vendor coordination, and operational visibility.",
      highlights: ["Procurement Management Tools", "Next.js", "Hasura", "Terraform"],
    },
    {
      title: "Full Stack Engineer",
      company: "Nexbash",
      duration: "April 2024 - Oct 2025",
      description:
        "Developed and maintained Next.js and React.js applications with a focus on performance and SEO. Delivered responsive, scalable web solutions with cross-functional teams.",
      highlights: ["Next.js", "React.js", "Performance", "Team Collaboration"],
    },
    {
      title: "Full Stack Engineer",
      company: "AuraByte",
      duration: "Mar 2022 - Dec 2024",
      description:
        "Built scalable web apps with Next.js and React.js. Improved SEO via SSR and implemented auth, authorization, and security best practices.",
      highlights: ["Next.js", "SSR/SEO", "JWT/OAuth", "Database Management"],
    },
    {
      title: "Frontend Engineer",
      company: "Devio-Corps",
      duration: "Jan 2020 - Feb 2022",
      description:
        "Developed responsive web apps with React.js, JavaScript, and Tailwind CSS. Partnered with designers to ship polished, fast interfaces.",
      highlights: ["React.js", "JavaScript", "Tailwind CSS", "UI Collaboration"],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-28 px-6 bg-muted/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <span
          className={`block text-accent font-bold text-sm mb-2 transition-all duration-700 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          03.
        </span>
        <h2
          className={`font-display text-4xl md:text-5xl font-extrabold text-foreground mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Experience
        </h2>

        <div className="space-y-5">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className={`group relative bg-card rounded-md p-6 md:p-8 border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: isInView ? `${idx * 100}ms` : "0ms" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-semibold text-lg mt-0.5">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{exp.duration}</span>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed max-w-3xl">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span key={h} className="text-xs px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-sm">
                    {h}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
