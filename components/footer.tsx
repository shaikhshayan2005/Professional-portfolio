"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <footer
      id="contact"
      ref={ref}
      className={`py-20 md:py-24 px-6 bg-background border-t border-border transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <span className="block text-accent font-bold text-sm mb-2">05.</span>
        <h3 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">Let&apos;s Talk</h3>
        <p className="text-muted-foreground leading-relaxed max-w-lg mb-10">
          Open to new projects and opportunities. Reach out if you want to build something together — or just say hello.
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-14">
          <a
            href="mailto:shaikhshayanshaikh2005@gmail.com"
            className="text-lg md:text-xl text-foreground hover:text-accent transition-colors font-medium break-all"
          >
            shaikhshayanshaikh2005@gmail.com
          </a>

          <div className="flex gap-3">
            {[
              { href: "https://github.com/shaikhshayan2005", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/sheikh-shayan-476402286/", label: "LinkedIn", Icon: Linkedin },
              { href: "mailto:shaikhshayanshaikh2005@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:border-accent hover:text-accent hover:scale-110 transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <a
          href="mailto:shaikhshayanshaikh2005@gmail.com"
          className="inline-block px-8 py-3.5 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all mb-14"
        >
          Get In Touch
        </a>

        <div className="border-t border-border pt-8 flex justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Shayan Sheikh. All rights reserved.</p>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
