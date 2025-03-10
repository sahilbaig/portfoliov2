import { Button } from "@/components/ui/button";
import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandUbuntu,
  IconBrandGithub,
} from "@tabler/icons-react";

const techStacks = [
  { name: "Python", icon: IconBrandPython },
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "HTML", icon: IconBrandHtml5 },
  { name: "CSS", icon: IconBrandCss3 },
  { name: "ReactJS", icon: IconBrandReact },
  { name: "NodeJS", icon: IconBrandNodejs },
  { name: "MongoDB", icon: IconBrandMongodb },
  { name: "Linux", icon: IconBrandUbuntu },
  { name: "GitHub", icon: IconBrandGithub },
];

const Techdiv = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {techStacks.map((tech, index) => (
        <Button
          key={index}
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 text-sm"
        >
          <tech.icon size={22} />
          {tech.name}
        </Button>
      ))}
    </div>
  );
};

export default Techdiv;
