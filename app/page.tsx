import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </main>
  )
}
