import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Java Developer',
      company: 'Ally Bank',
      location: 'Charlotte, NC, USA',
      period: 'Jan 2025 – Present',
      type: 'Full-time',
      description: [
        'Developing scalable microservices for digital banking backend using Spring Boot, Eureka, and Hystrix for service discovery and circuit breaker patterns',
        'Building REST APIs to handle customer transactions, account management, and real-time payment processing',
        'Implementing CI/CD pipelines with Jenkins and Docker for automated testing and deployment to AWS EC2 instances',
        'Creating responsive ReactJS frontend components with Redux for state management and real-time data visualization',
        'Ensuring security compliance with JWT token authentication and OAuth2 authorization protocols'
      ],
      technologies: ['Spring Boot', 'React.js', 'AWS', 'Docker', 'Jenkins', 'JWT', 'OAuth2', 'Microservices']
    },
    {
      title: 'Full Stack Developer',
      company: 'Loan Origination System',
      location: 'Academic Project',
      period: 'Aug 2023 – Jan 2025',
      type: 'Project',
      description: [
        'Designed and developed a comprehensive loan management platform using React with Redux for efficient state management',
        'Built robust backend APIs with Spring Boot 3.x and Spring Security for authentication and authorization',
        'Integrated Chart.js for interactive dashboards displaying loan statistics, approval rates, and KPI metrics',
        'Implemented role-based access control for loan officers, underwriters, and administrators',
        'Created automated workflows for loan application processing with real-time status updates'
      ],
      technologies: ['React.js', 'Redux', 'Spring Boot 3.x', 'Spring Security', 'Chart.js', 'MySQL']
    },
    {
      title: 'Software Engineer',
      company: 'Keysight Technologies',
      location: 'Bangalore, India',
      period: 'Jun 2021 – Jun 2023',
      type: 'Full-time',
      description: [
        'Developed enterprise workflow management platform using Angular with TypeScript for enhanced type safety',
        'Built scalable backend services using Spring Boot 2.x with microservices architecture',
        'Implemented JWT-based authentication and role-based authorization for secure user access',
        'Containerized applications using Docker and set up Jenkins CI/CD pipelines for automated deployments',
        'Optimized application performance resulting in 40% faster load times and improved user experience'
      ],
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'JWT', 'Docker', 'Jenkins', 'PostgreSQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Plus 20 Enterprises',
      location: 'Hyderabad, India',
      period: 'Jun 2020 – Jun 2021',
      type: 'Full-time',
      description: [
        'Developed responsive web applications using Angular framework with modern UI/UX principles',
        'Implemented complex Reactive Forms for data collection and validation with real-time feedback',
        'Utilized RxJS for handling asynchronous operations and managing application state effectively',
        'Wrote comprehensive unit tests using Jasmine and Karma to ensure code quality and reliability',
        'Collaborated with design teams to create pixel-perfect interfaces and seamless user experiences'
      ],
      technologies: ['Angular', 'RxJS', 'Reactive Forms', 'Jasmine', 'Karma', 'HTML5', 'CSS3']
    },
    {
      title: 'Java Developer Intern',
      company: 'NPTEL Swayam',
      location: 'Remote',
      period: 'Jul 2019 – Oct 2019',
      type: 'Internship',
      description: [
        'Learned Object-Oriented Programming concepts in Java and applied them to build console applications',
        'Developed database connectivity solutions using JDBC for data persistence and retrieval',
        'Implemented multithreading concepts to create concurrent applications with improved performance',
        'Built various utility applications demonstrating core Java features and best practices',
        'Completed certification program with hands-on projects and code reviews'
      ],
      technologies: ['Java', 'JDBC', 'Multithreading', 'OOP', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-portfolio-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            A journey through diverse industries and challenging projects that shaped my expertise
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="p-6 border-border hover:border-primary/30 transition-all duration-200 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-semibold">{exp.company}</span>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-portfolio-text-light mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-portfolio-text-light leading-relaxed">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;