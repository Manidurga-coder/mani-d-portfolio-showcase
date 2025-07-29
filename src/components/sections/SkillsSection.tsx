import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        'Java 8+', 'Spring Boot', 'Hibernate', 'React.js', 'Redux', 
        'Angular 17', 'TypeScript', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'
      ],
      color: 'bg-blue-500/10 text-blue-600 border-blue-500/20'
    },
    {
      title: 'Databases & Messaging',
      skills: [
        'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'RabbitMQ', 
        'Apache Kafka', 'Redis', 'H2 Database'
      ],
      color: 'bg-green-500/10 text-green-600 border-green-500/20'
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        'AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'Jenkins', 
        'Git', 'GitHub Enterprise', 'Elastic Beanstalk', 'CloudFormation'
      ],
      color: 'bg-orange-500/10 text-orange-600 border-orange-500/20'
    },
    {
      title: 'Testing & Tools',
      skills: [
        'JUnit', 'Mockito', 'Postman', 'Swagger', 'SonarQube', 
        'Maven', 'Gradle', 'IntelliJ IDEA', 'VS Code', 'Jira'
      ],
      color: 'bg-purple-500/10 text-purple-600 border-purple-500/20'
    },
    {
      title: 'Architecture & Patterns',
      skills: [
        'Microservices', 'REST APIs', 'GraphQL', 'MVC', 'TDD', 
        'SOLID Principles', 'Design Patterns', 'Clean Architecture'
      ],
      color: 'bg-pink-500/10 text-pink-600 border-pink-500/20'
    },
    {
      title: 'Security & Authentication',
      skills: [
        'JWT', 'OAuth2', 'Spring Security', 'HTTPS', 'SSL/TLS', 
        'CORS', 'Authentication', 'Authorization'
      ],
      color: 'bg-red-500/10 text-red-600 border-red-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I've mastered throughout my journey 
            as a Full Stack Java Developer
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full border-border hover:border-primary/30 transition-all duration-200 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Java & Spring Ecosystem',
              'React.js & Modern Frontend',
              'Microservices Architecture', 
              'AWS Cloud Services',
              'Database Design & Optimization',
              'CI/CD & DevOps Practices'
            ].map((expertise, index) => (
              <motion.div
                key={expertise}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <span className="text-primary font-medium">{expertise}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;