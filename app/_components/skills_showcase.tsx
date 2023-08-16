import SkillCard from "./skill_card"

const skills = [

    {
        name: 'JavaScript',
        image_src:'/skill_icons/javascript.svg'
    },
    {
        name: 'TypeScript',
        image_src:'/skill_icons/typescript.svg'
    },
    {
        name: 'Python',
        image_src:'/skill_icons/python.svg'
    },
    {
        name: 'ReactJS',
        image_src:'/skill_icons/react.svg'
    },
    {
        name: 'NextJS',
        image_src:'/skill_icons/nextjs.svg'
    },

    {
        name: 'NodeJS',
        image_src:'/skill_icons/nodejs.svg'
    },  
    {
        name: 'AngularJS',
        image_src:'/skill_icons/angular.svg'
    },  
    {
        name: 'MongoDB',
        image_src:'/skill_icons/mongodb.svg'
    },
    {
        name: 'PosgreSQL',
        image_src:'/skill_icons/postgresql.svg'
    },
    {
        name: 'Jest',
        image_src:'/skill_icons/jest.svg'
    },
    {
        name: 'TailwindCSS',
        image_src:'/skill_icons/tailwindcss.svg'
    },
    {
        name: 'Figma',
        image_src:'/skill_icons/figma.svg'
    },
    {
        name: 'AdobeXD',
        image_src:'/skill_icons/adobexd.svg'
    },
    {
        name: 'Docker',
        image_src:'/skill_icons/docker.svg'
    },
    {
        name: 'Amazon EC2',
        image_src:'/skill_icons/amazonec2.svg'
    },
    {
        name: 'Vercel',
        image_src:'/skill_icons/vercel.svg'
    }
]
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