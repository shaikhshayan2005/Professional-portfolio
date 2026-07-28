"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-foreground shrink-0">
          Shayan
        </Link>

        <div className="hidden lg:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`relative text-sm font-medium tracking-wide transition-colors ${
                active === item.label ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {active === item.label && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground hover:text-accent transition-colors font-medium"
                onClick={() => {
                  setActive(item.label)
                  setIsOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-block mt-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-bold tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
