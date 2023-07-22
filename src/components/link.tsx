import Image from "next/image"

interface linkProp {
    path:string;
    label:string;
    icon:string;
}

export default function header (prop : linkProp){


    var iconHeight = 40
    var iconWidth = 40
    return(
        <a href={prop.path} className="block bg-neutral-800 hover:bg-neutral-950 p-4 " >
            <div className="flex items-center text-neutral-50">
                <div className=" flex">
                    <Image width={iconWidth} height={iconHeight} src={prop.icon} alt=""/>
                </div>
                <div className=" flex pl-2">{prop.label}</div>
            </div>
        </a>
    )
}