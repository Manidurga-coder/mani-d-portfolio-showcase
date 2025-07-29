import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Central Missouri',
      location: 'Warrensburg, MO, USA',
      period: '2023 - 2025',
      gpa: '3.9/4.0',
      type: 'Graduate',
      highlights: [
        'Advanced Software Engineering and System Design',
        'Database Management and Big Data Analytics',
        'Machine Learning and Artificial Intelligence',
        'Cloud Computing and Distributed Systems',
        'Research in Microservices Architecture'
      ],
      courses: [
        'Advanced Data Structures & Algorithms',
        'Software Engineering Principles',
        'Database Design & Management',
        'Cloud Computing & AWS',
        'Machine Learning',
        'System Design & Architecture'
      ]
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'CMR Institute of Technology',
      location: 'Hyderabad, India',
      period: '2016 - 2020',
      gpa: '3.7/4.0',
      type: 'Undergraduate',
      highlights: [
        'Strong foundation in Computer Science fundamentals',
        'Object-Oriented Programming and Software Development',
        'Web Technologies and Database Systems',
        'Computer Networks and Operating Systems',
        'Final year project on E-Commerce Platform'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Web Technologies'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      status: 'In Progress',
      color: 'bg-orange-500/10 text-orange-600 border-orange-500/20'
    },
    {
      title: 'Oracle Certified Professional, Java SE',
      issuer: 'Oracle',
      status: 'Planned',
      color: 'bg-red-500/10 text-red-600 border-red-500/20'
    },
    {
      title: 'Spring Professional Certification',
      issuer: 'Pivotal/VMware',
      status: 'Planned',
      color: 'bg-green-500/10 text-green-600 border-green-500/20'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      status: 'Planned',
      color: 'bg-blue-500/10 text-blue-600 border-blue-500/20'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-portfolio-text-light text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning that drives my technical expertise
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Academic Background
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-border hover:border-primary/30 transition-all duration-200 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <GraduationCap size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-semibold text-lg">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-portfolio-text-light mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={14} />
                          GPA: {edu.gpa}
                        </div>
                      </div>

                      <Badge 
                        variant="outline" 
                        className="mb-4 bg-primary/10 text-primary border-primary/20"
                      >
                        {edu.type} Degree
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-portfolio-text-light">
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge 
                            key={course} 
                            variant="secondary"
                            className="text-xs bg-secondary/50 text-secondary-foreground"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-4 h-full border-border hover:border-primary/30 transition-all duration-200 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-portfolio-text-light mb-3">
                        {cert.issuer}
                      </p>
                      <Badge 
                        variant="outline" 
                        className={cert.color}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-portfolio-text-light text-sm">
              🎯 Committed to continuous learning and staying updated with industry best practices
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;