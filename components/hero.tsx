"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Background3D } from "./3d-background"

export function Hero() {
  const tags = ["React", "Next.js", "Hasura", "Terraform"]

  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <Background3D />

      {/* Atmosphere — fills empty dark space */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[70%] rounded-full bg-accent/15 blur-[120px] animate-glow" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[55%] rounded-full bg-[#3b82f6]/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center">
          {/* Left copy */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-[0.18em] uppercase">
                Available for work
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-accent text-sm font-bold tracking-[0.22em] uppercase animate-fade-up animate-delay-100">
                Hello, my name is
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-foreground leading-[1.05] tracking-tight animate-fade-up animate-delay-100">
                Shayan
                <br />
                <span className="relative inline-block">
                  Sheikh
                  <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-accent/90 rounded-sm" />
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl font-medium animate-fade-up animate-delay-200">
                Full Stack Developer — building fast, clean web apps with React, Next.js & modern tooling.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 animate-fade-up animate-delay-300">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded-md bg-card border border-border text-foreground/80 hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1 animate-fade-up animate-delay-400">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-bold tracking-wide rounded-lg hover:brightness-110 hover:gap-3 transition-all shadow-lg shadow-accent/25"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex gap-2.5">
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
                    className="w-11 h-11 rounded-full border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right portrait — balanced frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up animate-delay-200">
            <div className="relative">
              {/* Orange accent frame behind */}
              <div className="absolute -inset-3 md:-inset-4 rounded-3xl border border-accent/40 rotate-3 pointer-events-none" />
              <div className="absolute -inset-3 md:-inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-blue-500/10 -rotate-2 pointer-events-none" />

              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] animate-float">
                <div className="absolute -inset-6 rounded-full bg-accent/25 blur-3xl animate-glow pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shayan%20second%20image-oDQa6UASv1Q0sA2X1l7bok8eIvKd2g.png"
                    alt="Shayan Sheikh - Full Stack Developer"
                    fill
                    className="object-cover object-top"
                    sizes="288px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-bold tracking-widest uppercase text-accent">Full Stack</p>
                    <p className="text-sm font-semibold text-white">3+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
