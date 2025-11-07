export function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Nexbash",
      duration: "April 2024 - Oct 2025",
      description:
        "Developed and maintained Next.js and React.js applications with a focus on performance and SEO. Collaborated with cross-functional teams to deliver responsive, scalable, and user-friendly web solutions.",
      highlights: ["Next.js", "React.js", "Performance", "Team Collaboration"],
    },
    {
      title: "Full Stack Engineer",
      company: "AuraByte",
      duration: "Mar 2022 - Dec 2024",
      description:
        "Developed and maintained scalable web applications using Next.js and React.js, improving performance and SEO through server-side rendering. Implemented authentication, authorization, and security best practices.",
      highlights: ["Next.js", "SSR/SEO", "JWT/OAuth", "Database Management"],
    },
    {
      title: "Frontend Engineer",
      company: "Devio-Corps",
      duration: "Jan 2020 - Feb 2022",
      description:
        "Developed responsive web applications using React.js, JavaScript and Tailwind CSS. Collaborated with UI/UX Designers to translate designs into interactive and user-friendly interfaces with faster load times.",
      highlights: ["React.js", "JavaScript", "Tailwind CSS", "UI Collaboration"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-accent pl-6 pb-8 hover:border-accent/80 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-semibold text-lg">{exp.company}</p>
                </div>
                <span className="text-foreground/60 text-sm whitespace-nowrap">{exp.duration}</span>
              </div>

              <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <span key={highlight} className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-md">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
