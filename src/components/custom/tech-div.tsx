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
  {
    name: "Python",
    icon: IconBrandPython,
    hoverColor: "hover:bg-yellow-500 hover:text-black",
  },
  {
    name: "JavaScript",
    icon: IconBrandJavascript,
    hoverColor: "hover:bg-yellow-300 hover:text-black",
  },
  {
    name: "HTML",
    icon: IconBrandHtml5,
    hoverColor: "hover:bg-orange-500 hover:text-white",
  },
  {
    name: "CSS",
    icon: IconBrandCss3,
    hoverColor: "hover:bg-blue-500 hover:text-white",
  },
  {
    name: "ReactJS",
    icon: IconBrandReact,
    hoverColor: "hover:bg-cyan-500 hover:text-white",
  },
  {
    name: "NodeJS",
    icon: IconBrandNodejs,
    hoverColor: "hover:bg-green-500 hover:text-white",
  },
  {
    name: "MongoDB",
    icon: IconBrandMongodb,
    hoverColor: "hover:bg-green-700 hover:text-white",
  },
  {
    name: "Linux",
    icon: IconBrandUbuntu,
    hoverColor: "hover:bg-gray-700 hover:text-white",
  },
  {
    name: "GitHub",
    icon: IconBrandGithub,
    hoverColor: "hover:bg-gray-900 hover:text-white",
  },
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
