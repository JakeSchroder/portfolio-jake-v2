import SkillCard from "./skill_card"
import { skills } from "../_lib/constants"

export default function SkillsShowcase(){
    return(
        <div className=" bg-neutral-50">
        <hr/>
        <div className=" flex flex-row items-center justify-center gap-20 h-screen w-screen px-20 md:gap-5 md:flex-col sm:h-fit sm:flex-col sm:py-10 sm:items-start">
            <h1 className=" text-6xl text-left font-semibold sm:text-3xl sm:text-center">So what do I know?</h1>
            <div className=" grid grid-cols-3 w-1/2 gap-x-20 gap-y-5 md:grid-cols-2 md:w-3/4 sm:grid-cols-3">
                {
                    skills.map((skill, index)=><SkillCard name={skill.name} image_src={skill.image_src} key={index}/>)
                }
            </div>
        </div>
        </div>
    )
}