import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills