import CertificationShowcase from "./certification_showcase";
import ProjectShowcase from "./project_showcase";

const projects = [
    {
        name: 'Spotify Mixtape',
        image_src:'/spotify-mixtape-site.png',
        url: 'https://www.mixtape.digital',
        github: 'https://github.com/JakeSchroder/spotify-mixtape',
    },
    {
        name: 'Packrat',
        image_src: '/packrat-site.png',
        url: 'https://www.packrat.shop',
        github: 'https://github.com/JakeSchroder/packrat-v2',
    },
    {
        name: 'Portfolio-V1',
        image_src: '/portfolio-v1-site.png',
        url: 'https://portfolio-jake-jakeschroder.vercel.app/',
        github: 'https://github.com/JakeSchroder/portfolio-jake'
    }
]
export default function Body(){
    return(
        <div className=" flex flex-col ">
            <div className=" flex flex-col items-center justify-center h-screen">
                <h1 className=" text-8xl sm:text-3xl md:text-6xl text-center">Hello, I'm <b className="hover:text-gradient ">Jake Schroder,</b></h1>
                <h1 className=" text-8xl sm:text-3xl md:text-6xl text-center font-bold hover:text-gradient">Fullstack Developer</h1>
            </div>
            {
                projects.map((project, index) => <ProjectShowcase 
                    name={project.name} 
                    image_src={project.image_src} 
                    url={project.url} 
                    github={project.github}
                    key={index}
                />
                )
            }
            <CertificationShowcase/>
        </div>
    )
}