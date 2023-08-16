import CertificationShowcase from "./certification_showcase";
import ProjectShowcase from "./project_showcase";
import SkillsShowcase from "./skills_showcase";
export default function Body(){
    return(
        <div className=" flex flex-col ">
            <div className=" flex flex-col items-center justify-center h-screen">
                <h1 className=" text-8xl sm:text-3xl md:text-6xl text-center">Hello, I'm <b className="hover:text-gradient ">Jake Schroder,</b></h1>
                <h1 className=" text-8xl sm:text-3xl md:text-6xl text-center font-bold hover:text-gradient">Fullstack Developer</h1>
            </div>
            <SkillsShowcase/>
            <ProjectShowcase/>
            <CertificationShowcase/>
        </div>
    )
}