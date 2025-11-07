import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Background3D } from "./3d-background"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      <Background3D />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 order-2 md:order-1">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Hi, I'm Shayan Sheikh
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold">Full Stack Developer</p>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-lg">
              Crafting beautiful, responsive web applications with 3+ years of experience in React.js, Next.js, and
              modern web technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="https://www.linkedin.com/in/sheikh-shayan-476402286/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Get in Touch
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/shaikhshayan2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sheikh-shayan-476402286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:shaikhshayanshaikh2005@gmail.com"
                className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shayan%20second%20image-oDQa6UASv1Q0sA2X1l7bok8eIvKd2g.png"
                alt="Shayan Sheikh - Full Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
