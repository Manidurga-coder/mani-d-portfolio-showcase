import { motion } from 'framer-motion';
import { Eye, Mail, Phone, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/FullSizeRender.jpg';
import { useEffect, useState } from 'react';
import AnimatedName from './AnimatedName';

const HeroSection = () => {
  const roles = ['Full Stack Java Developer', 'Software Engineer'];
  const [currentRole, setCurrentRole] = useState(0);

  // Role animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:manidurga4999@gmail.com',
      label: 'Email',
      text: 'manidurga4999@gmail.com',
    },
    {
      icon: Phone,
      href: 'tel:+19134564774',
      label: 'Phone',
      text: '+1 (913) 456-4774',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/manidurga-kanaparthi',
      label: 'LinkedIn',
      text: 'LinkedIn Profile',
    },
  ];

  return (
    <section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 py-16"
  style={{
    backgroundImage: "url('/assets/dev-bg.jpg')",  // replace with real path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-3xl w-full">
        {/* Profile Photo */}
        <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-6 z-10"
>
  <div className="mt-[-40px] mb-6 z-10">
  <img
    src={profileImage}
    alt="Mani Durga Kanaparthi"
    className="w-48 h-48 md:w-45 md:h-45 rounded-full object-cover border-4 border-primary shadow-2xl ring-4 ring-primary/30 mx-auto"
    style={{ objectPosition: 'center 30%'  }}
  />
</div>

</motion.div>


        {/* Name and Role */}
       <AnimatedName />

<motion.h2
  key={currentRole}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-lg md:text-xl text-purple-300 font-large mb-4 mt-4"
>
  {roles[currentRole]}
</motion.h2>


        {/* Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-md md:text-lg text-gray-200 leading-relaxed mb-6"
        >
          Passionate about building scalable applications with{' '}
          <span className="text-primary font-semibold">Java</span>,{' '}
          <span className="text-primary font-semibold">Spring Boot</span>,{' '}
          <span className="text-primary font-semibold">React.js</span>, and{' '}
          <span className="text-primary font-semibold">Angular</span>. <br />
          5+ years of experience creating robust solutions for finance, e-commerce, and manufacturing.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/20 transition-all text-white text-sm"
              >
                <Icon size={18} className="text-primary" />
                {link.text}
              </a>
            );
          })}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="group">
            <a
              href="/Manidurga_Kanaparthi_Fullstackjava_resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Eye size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              View Resume
            </a>
          </Button>

          <Button asChild variant="outline" size="lg" className="group">
            <a
              href="/Manidurga_Kanaparthi_Fullstackjava_resume2.pdf"
              download="Manidurga_Kanaparthi_Fullstackjava_resume2"
              className="flex items-center"
            >
              <Download size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
