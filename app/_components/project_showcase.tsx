import Image from "next/image";

interface DefaultProps{
    name: string,
    image_src: string,
    url: string,
    github: string,
}
export default function ProjectShowcase(props:DefaultProps){

    return(
        <>
            <hr/>
            <div className=" flex flex-col h-screen justify-center items-center gap-2 sm:gap-10">
                <div className=" flex flex-col justify-center items-center gap-2 sm:gap-0">
                    <h1 className=" font-semibold text-6xl sm:text-4xl">{props.name}</h1>
                    <a className=" text-lg text-sky-600 underline-offset-4 hover:underline" href={props.url}>Demo</a>
                    <a href={props.github}>
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
                <a className=" select-none sm:w-3/4 md:w-3/4" href={props.url}>
                    <Image
                    className=" rounded-md shadow-xl sm:shadow-2xl "
                    src={props.image_src}
                    alt={props.name}
                    width={1400}
                    height={600}
                    priority
                    />
                </a>

            </div>
            <hr/>
        </>
    )
}