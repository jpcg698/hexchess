'use client'
import React, { useEffect } from "react";
import Hex from "../../components/hex"
var a = "hello"
interface cell {
    row:number;
    col:number;
    active:boolean
}
var funnelHeight = 6
var midLength = 6
var heightActual = 2*midLength + 2*funnelHeight - 3 ///always odd
var midLengthActual = 2*midLength -1 // always odd
var board:Array<Array<cell>> = []
// for(let i = 0;i<funnelHeight;i++){
//     let currRow = []
//     let prevActive = false
//     for(let j = 0; j < (2*i + 1) ;j++){
//         prevActive = !prevActive
//         let currCell = {row:i+1, col:midLength-i+j, active:prevActive}
//         currRow.push(currCell)
//     }
//     board.push(currRow)
// }

const checkIfActive = (row:number,col:number) => {
    return ( ((row + col)%2 > 0) && (row + col > midLength) && (row + col < (heightActual + midLength + 1)) && (col - row < midLength) && (col - row > (-1 * (heightActual - midLength + 1))) )
}

for(let i = 0; i < heightActual;i++){
    let currRow = []
    for(let j = 0; j< midLengthActual;j++){
        let currCell = {row:i+1, col:j+1, active:checkIfActive(i+1,j+1), colmrow:j+1-(i+1)}
        currRow.push(currCell)
    }
    board.push(currRow)
}
export default function Play(){
    useEffect(()=>{
        console.log(board)
    },[])
    return(
        <main className="">
            <div className="self-center grid">

            {board.map((row,i)=>(
                <div key={"row " + i} className="items-center flex justify-center">
                    {row.map((cell,i)=>(
                        <Hex key={cell.col + " " + cell.row} info={cell}/>
                        ))}
                </div>
            ))}
            </div>
        </main>
    )
}