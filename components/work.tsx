"use client"

import { ArrowUpRight, Building2, Palette, ShoppingBag, Store, Drumstick } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Work() {
  const { ref, isInView } = useInView<HTMLElement>()

  const projects = [
    {
      title: "Stackentis Website",
      client: "Software Company",
      description:
        "Built the company website for Stackentis with a clean, professional presentation focused on trust, clarity, and a modern business identity.",
      tags: ["Corporate Website", "Frontend", "Responsive UI"],
      href: "https://www.stackentis.com",
      Icon: Building2,
    },
    {
      title: "Multiple Clothing Brand Websites",
      client: "Client Projects",
      description:
        "Created multiple clothing brand websites for clients and translated their designs into polished, responsive storefront experiences with close design matching.",
      tags: ["Client Design", "Ecommerce UI", "Responsive"],
      href: "https://cloth-brand-tau.vercel.app/",
      Icon: ShoppingBag,
    },
    {
      title: "Drape Dreamers",
      client: "Fashion Brand",
      description:
        "Designed and developed the Drape Dreamers website with a fashion-focused visual style and a smooth user experience tailored to the brand direction.",
      tags: ["Brand Website", "Fashion UI", "Custom Design"],
      Icon: Palette,
    },
    {
      title: "WAZ Platform",
      client: "Business Operations",
      description:
        "Built product flows and interfaces for WAZ, including procurement management tools to help teams handle purchasing, vendor coordination, and operational workflows.",
      tags: ["WAZ", "Procurement Management Tools", "Operations"],
      Icon: Building2,
    },
    {
      title: "Restaurant Management System",
      client: "Client Project",
      description:
        "Developed a restaurant management system to streamline orders, operations, and day-to-day workflow management with a practical and easy-to-use interface.",
      tags: ["Dashboard", "Management System", "Client Solution"],
      Icon: Store,
    },
    {
      title: "Poultry Management System",
      client: "Client Project",
      description:
        "Created a poultry management system for organizing records, monitoring operations, and simplifying management processes through a custom web solution.",
      tags: ["Business System", "Custom Web App", "Operations"],
      Icon: Drumstick,
    },
  ]

  return (
    <section id="work" className="py-20 md:py-28 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span
              className={`block text-accent font-bold text-sm mb-2 transition-all duration-700 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
            >
              02.
            </span>
            <h2
              className={`font-display text-4xl md:text-5xl font-extrabold text-foreground transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Selected Work
            </h2>
          </div>
          <p
            className={`max-w-xl text-sm md:text-base text-muted-foreground transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
          >
            Client websites built for software and fashion brands, based on business goals and custom design direction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, idx) => {
            const Icon = project.Icon

            return (
              <article
                key={project.title}
                className={`group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isInView ? `${idx * 110}ms` : "0ms" }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">{project.client}</p>
                <h3 className="font-display text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-sm bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-muted-foreground">
                    Private Client Project
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
