import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/mani-profile.jpg';

const HeroSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:manidurga4999@gmail.com',
      label: 'Email',
      text: 'manidurga4999@gmail.com'
    },
    {
      icon: Phone,
      href: 'tel:+19134564774',
      label: 'Phone',
      text: '+1 (913) 456-4774'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/manidurga-kanaparthi',
      label: 'LinkedIn',
      text: 'LinkedIn Profile'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-lg text-portfolio-text-light">Hi there 👋</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Mani Durga Kanaparthi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-portfolio-text-light">
                Full Stack Java Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-portfolio-text-light max-w-lg leading-relaxed"
            >
              Passionate about building scalable applications with{' '}
              <span className="text-primary font-semibold">Java</span>,{' '}
              <span className="text-primary font-semibold">Spring Boot</span>, and{' '}
              <span className="text-primary font-semibold">React.js</span>. 
              5+ years of experience in creating robust solutions for finance, e-commerce, and manufacturing.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:bg-card/80 transition-all duration-200"
                  >
                    <Icon size={18} className="text-primary" />
                    <span className="text-sm text-foreground">{link.text}</span>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <Button size="lg" className="group">
                <Mail size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl relative">
                <img
                  src={profileImage}
                  alt="Mani Durga Kanaparthi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating decoration */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20"
              />
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full backdrop-blur-sm border border-secondary/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;