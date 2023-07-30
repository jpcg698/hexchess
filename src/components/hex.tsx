import React from "react";
import Image from "next/image";
export default function Tile (prop: { info: { active: any; row:number; piece:string}; }){

    let color
    let rowMod = prop.info.row % 3
    let bgrook = "./../"
    let pieceImage : any = {
        rook:"./Chess_rdt45.svg"
    }

    switch(rowMod){
        case 0:
            color = "#FFCF9E"
            break
        case 1:
            color = "#E8AC6F"
            break
        case 2:
            color = "#D18C47"
            break
    }
    if(prop.info.active){
        return (
                <div className="inline-block -mt-10 ml-10 w-20 h-20 relative">
                    <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 100 100">
                    <polygon fillOpacity={1} fill={color} stroke="#231F20" strokeWidth="0.1" 
                    strokeMiterlimit="10" points="25 0, 75 0, 100 50, 75 100,25 100, 0 50" opacity="0.6" />
                    </svg>
                    { prop.info.piece.length > 0 &&
                            <Image className="absolute block w-3/4 max-w-full h-3/4 z-10 top-2 left-2.5" width={0} height={0} src={pieceImage[prop.info.piece]} alt=""/>
                            /* <Image className="block w-full max-w-full h-auto z-10" width={0} height={0} src="/./Chess_rdt60.png" alt=""/> */
                    }
                </div>
            )
    }else{
        return(
                null
        )
    }
}