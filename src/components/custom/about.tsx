import { Button } from "../ui/button";
import Techdiv from "./tech-div";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-5xl">
          Mirza Sahil Baig
        </h1>
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-5xl">
          Full-Stack Developer
        </h1>
        <Button>Download Resume</Button>
        <Techdiv></Techdiv>
      </div>
    </div>
  );
}
