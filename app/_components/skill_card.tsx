import Image from "next/image";

interface DefaultProps{
    name: string,
    image_src: string,
}

export default function SkillCard(props:DefaultProps){
    return(
        <div className=" flex flex-row items-center justify-start w-[200px] h-[45px] bg-neutral-200 rounded-md gap-5 hover:shadow-lg hover:box-gradient sm:w-[45px] sm:justify-center">
            <Image
                className=" ml-5 select-none sm:left-0"
                src={props.image_src}
                alt={`${props.name} icon`}
                width={24}
                height={24}
            />
            <h1 className="font-light text-lg sm:hidden">{props.name}</h1>
            
        </div>
    )
}