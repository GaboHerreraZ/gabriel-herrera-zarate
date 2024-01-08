import AboutMe from "@/components/about-me/AboutMe";
import { Experience } from "@/components/experience/Experience";
import { Footer } from "@/components/footer/Footer";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

type Props = {
  params: { lng: string };
};

export default function Home({ params: { lng } }: Props) {
  return (
    <>
      <AboutMe lng={lng} />
      <Skills lng={lng} />
      <Experience lng={lng} />
      <Projects lng={lng} />
      <Footer lng={lng} />
    </>
  );
}
