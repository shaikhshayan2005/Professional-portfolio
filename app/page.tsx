import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Stats } from "@/components/stats"
import { Work } from "@/components/work"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <Work />
      <Stats />
      <About />
      <Experience />
      <Footer />
    </main>
  )
}
