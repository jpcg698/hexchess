'use client'
import React, { useEffect, useState } from "react";
import Hex from "../../components/hex"
var a = "hello"
interface cell {
    row:number;
    col:number;
    active:boolean;
    piece:string;
}
var funnelHeight = 6
var midLength = 6
var heightActual = 2*midLength + 2*funnelHeight - 3 ///always odd
var midLengthActual = 2*midLength -1 // always odd
var board:Array<Array<cell>> = []


const checkIfActive = (row:number,col:number) => {
    return ( ((row + col)%2 > 0) && (row + col > midLength) && (row + col < (heightActual + midLength + 1)) && (col - row < midLength) && (col - row > (-1 * (heightActual - midLength + 1))) )
}


export default function Play(){
    const [board,setBoard] = useState<Array<Array<cell>>>([[]])

    function initializeBoard(){
        let initBoard = []
        for(let i = 0; i < heightActual;i++){
            let currRow = []
            for(let j = 0; j< midLengthActual;j++){
                let currCell = {row:i+1, col:j+1, active:checkIfActive(i+1,j+1), piece:""}
                currRow.push(currCell)
            }
            initBoard.push(currRow)
        }
        initBoard[6][5].piece = "rook"
        console.log(initBoard)
        setBoard(initBoard)
    }

    useEffect(()=>{
        initializeBoard()
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