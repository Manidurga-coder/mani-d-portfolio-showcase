import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Digital Banking Backend Platform',
      description: 'Comprehensive microservices-based banking platform handling customer onboarding, transaction processing, and account management with high scalability and security.',
      longDescription: [
        'Built end-to-end customer onboarding system with automated KYC verification and document processing',
        'Implemented real-time transaction processing engine handling 10,000+ transactions per minute',
        'Designed scalable microservices architecture using Spring Boot with service discovery via Eureka',
        'Integrated AWS services for secure data storage, processing, and automated scaling',
        'Implemented comprehensive security measures including JWT authentication and OAuth2 authorization'
      ],
      technologies: ['Spring Boot', 'Microservices', 'AWS', 'React.js', 'Docker', 'Jenkins', 'JWT', 'PostgreSQL'],
      features: [
        { icon: Code, text: 'Microservices Architecture' },
        { icon: Database, text: 'Real-time Processing' },
        { icon: Cloud, text: 'AWS Cloud Integration' },
        { icon: Shield, text: 'Enterprise Security' }
      ],
      category: 'Full Stack',
      status: 'Production',
      github: '#',
      
    },
    {
      title: 'Loan Origination & Approval Management',
      description: 'Full-stack loan management system simulating complete loan workflows from application to approval with real-time status updates and comprehensive KPI dashboards.',
      longDescription: [
        'Developed complete loan workflow simulation from application submission to final approval decision',
        'Created interactive KPI dashboards using Chart.js for real-time analytics and reporting',
        'Implemented role-based access control for different user types (applicants, officers, managers)',
        'Built automated decision engine with configurable business rules and approval criteria',
        'Integrated notification system for real-time status updates via email and in-app notifications'
      ],
      technologies: ['React.js', 'Redux', 'Spring Boot 3.x', 'Spring Security', 'Chart.js', 'MySQL', 'Maven'],
      features: [
        { icon: Code, text: 'React + Redux Frontend' },
        { icon: Database, text: 'Workflow Management' },
        { icon: Cloud, text: 'Real-time Analytics' },
        { icon: Shield, text: 'Role-based Access' }
      ],
      category: 'Full Stack',
      status: 'Completed',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            Showcasing my expertise through real-world applications that solve complex business challenges
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Project Image/Visual */}
                  <motion.div 
                    className="lg:col-span-1 bg-gradient-primary p-8 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-center text-white relative z-10">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Code size={32} className="text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {project.category}
                      </Badge>
                      <div className="mt-4">
                        <Badge 
                          variant="outline" 
                          className={`${
                            project.status === 'Production' 
                              ? 'bg-green-500/20 text-green-100 border-green-500/30' 
                              : 'bg-blue-500/20 text-blue-100 border-blue-500/30'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-8 h-8 border border-white rounded-full" />
                      <div className="absolute bottom-8 right-8 w-12 h-12 border border-white rounded-lg" />
                      <div className="absolute top-1/2 right-4 w-6 h-6 bg-white rounded-full" />
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="lg:col-span-2 p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-portfolio-text-light text-lg">
                          {project.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.features.map((feature, i) => {
                          const Icon = feature.icon;
                          return (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <Icon size={16} className="text-primary" />
                              <span className="text-portfolio-text-light">{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Detailed Description */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {project.longDescription.map((item, i) => (
                            <li key={i} className="text-sm text-portfolio-text-light">
                              <span className="text-primary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button variant="default" size="sm" className="group">
                          <Github size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                          View Code
                        </Button>
                       {/* {project.live && (
                          <Button variant="outline" size="sm" className="group">
                            <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                            Live Demo
                          </Button>
                        )}
                        {project.demo && (
                          <Button variant="outline" size="sm" className="group">
                            <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                            Demo
                          </Button>
                        )}*/}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-portfolio-text-light mb-4">
            Want to see more projects and explore my code?
          </p>
          <Button variant="outline" className="group">
            <Github size={18} className="mr-2 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;