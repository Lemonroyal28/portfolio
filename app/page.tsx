import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import ExperienceSection from '@/components/Experience/ExperienceSection';
import EducationSection from '@/components/Education/EducationSection';
import SkillsSection from '@/components/Skills/SkillsSection';
import LanguagesSection from '@/components/Languages/LanguagesSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import ActivitiesSection from '@/components/Activities/ActivitiesSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <ExperienceSection />
      <Divider />
      <EducationSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <LanguagesSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ActivitiesSection />
      <Divider />
      <CTA />
      <Footer />
    </>
  );
}
