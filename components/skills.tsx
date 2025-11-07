export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "MongoDB", "SQL", "JWT/OAuth", "API Integration"],
    },
    {
      category: "Other",
      skills: ["Vue.js", "Python", "SSR/SEO", "Performance Optimization", "Responsive Design"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-card p-8 rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-accent mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted text-foreground/80 rounded-lg text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
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
