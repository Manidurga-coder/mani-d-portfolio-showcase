import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Expertise',
      description: 'React.js, Redux, Angular 17, TypeScript'
    },
    {
      icon: Server,
      title: 'Backend Mastery', 
      description: 'Java 8+, Spring Boot, Microservices, REST APIs'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'MySQL, Oracle, RabbitMQ, Kafka'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'AWS, Docker, Kubernetes, Jenkins CI/CD'
    }
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let me introduce myself.
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg leading-relaxed space-y-4">
              <p className="text-foreground">
                <span className="text-2xl">👨‍💻</span> Every line of code tells a story — here's mine…
              </p>
              
              <p className="text-portfolio-text-light">
                Hi, I'm Mani Durga Kanaparthi — a passionate Full Stack Java Developer with{' '}
                <span className="text-primary font-semibold">5+ years of experience</span> building 
                robust applications across finance, e-commerce, and manufacturing domains.
              </p>

              <p className="text-portfolio-text-light">
                Currently working at <span className="text-primary font-semibold">Ally Bank</span>, 
                I specialize in developing scalable microservices architecture using Spring Boot, 
                creating responsive React.js frontends, and implementing CI/CD pipelines with Docker and Jenkins.
              </p>

              <p className="text-portfolio-text-light">
                My expertise spans the entire development lifecycle — from designing REST APIs and 
                optimizing database performance to deploying applications on AWS cloud infrastructure. 
                I'm passionate about writing clean, maintainable code and following{' '}
                <span className="text-primary font-semibold">Test-Driven Development</span> practices.
              </p>

              <p className="text-portfolio-text-light">
                When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, 
                and staying updated with the latest trends in software development. I believe in continuous 
                learning and the power of collaboration to build amazing products.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 h-full border-border hover:border-primary/30 transition-all duration-200 bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-portfolio-text-light">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;