import React from "react";

export default function Tile (prop: { info: { active: any; }; }){
    if(prop.info.active){
        return (
            <div className="inline-block -mt-10 ml-10">
                <svg width={"5rem"} height={"5rem"} viewBox="0 0 100 100">
                <polygon fill="#F7941E" stroke="#231F20" stroke-width="1" 
                stroke-miterlimit="10" points="25 0, 75 0, 100 50, 75 100,25 100, 0 50" opacity="0.6" />
                </svg>
            </div>
            )
    }else{
        return(
                null
        )
    }
}