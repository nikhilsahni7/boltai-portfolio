import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-background to-secondary py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
          A passionate full-stack developer creating elegant solutions
        </p>
        <Button size="lg" className="animate-fade-in-delay-2">
          View My Work <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  )
}

export default Hero