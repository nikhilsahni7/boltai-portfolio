import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQEV3V1WKX-jAA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725339481596?e=1733961600&v=beta&t=2dnpGt8zK_l-srlrSyF2yRAWT6O0SJxq5xxavF7BjwM"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  I'm a full-stack developer with a passion for creating
                  beautiful, functional, and user-centered digital experiences.
                  With 5 years of experience in the field, I am always looking
                  for new and innovative ways to bring my clients' visions to
                  life.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying the great outdoors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
