'use client'
import Image from "next/image";
import { projects } from "../_lib/constants";
import mixpanel from 'mixpanel-browser';

export default function ProjectShowcase(){ 
    mixpanel.init('ca520d84479abab06d5e788d45bd2dde', { debug: true, track_pageview: true, persistence: 'localStorage', ignore_dnt: true });
    
    return(
        <div className=" [&>*:nth-child(odd)]:bg-neutral-50">
            {projects.map((project, index) => {
                //var sizeOf = require('image-size');
                //var dimensions = sizeOf(`public/${project.image_src}`);     
                return(
                    <div key={index}>
                        <hr/>
                        <div className=" flex flex-col h-screen justify-center items-center gap-2 sm:gap-10">
                            <div className=" flex flex-col justify-center items-center gap-2 sm:gap-0">
                                <div className=" flex flex-row items-baseline">
                                    <h1 className=" font-semibold text-center text-6xl pr-5 sm:text-4xl">{project.name}</h1>
                                    <a href={project.github} onClick={()=> mixpanel.track(`${project.name} github`)}>
                                        <Image
                                        className="hover:animate-[wiggle_1s_ease-in-out_infinite]"
                                        src="/github.svg"
                                        alt="Github Logo"
                                        width={30}
                                        height={24}
                                        priority
                                        />
                                    </a>
                                </div>
                                <a className=" text-lg text-sky-600 underline-offset-4 hover:underline" href={project.url} onClick={()=> mixpanel.track(`${project.name} demo`)}>Demo</a>
                            </div>
                            <a className=" select-none sm:w-3/4 md:w-3/4" href={project.url} onClick={()=> mixpanel.track(`${project.name} demo image`)}>
                                <Image
                                className=" rounded-md shadow-xl sm:shadow-2xl "
                                src={project.image_src}
                                alt={project.name}
                                width={1800/1.5}
                                height={1000/1.5}
                                priority
                                />
                            </a>
                            <p className=" font-light text-center italic text-xl text-gray-500 pt-5 w-3/4 sm:text-sm md:text-lg ">{project.description}</p>

                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )

}