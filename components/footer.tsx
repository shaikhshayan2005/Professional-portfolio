import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
            <p className="text-foreground/70 leading-relaxed">
              I'm always interested in new projects and opportunities. Feel free to reach out if you'd like to discuss
              an idea or simply say hello!
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-foreground/60 text-sm mb-2 font-medium">Email</p>
              <a
                href="mailto:shaikhshayanshaikh2005@gmail.com"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                shaikhshayanshaikh2005@gmail.com
              </a>
            </div>

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

        <div className="border-t border-border pt-8 flex justify-between items-center">
          <p className="text-foreground/60 text-sm">© 2025 Shayan Sheikh. All rights reserved.</p>

          <a
            href="#"
            className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
