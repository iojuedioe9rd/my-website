

import { useState } from 'react'

type useCanvasReturn = {
    canvas: HTMLCanvasElement,
    setCanvas: React.Dispatch<React.SetStateAction<HTMLCanvasElement>>,


    ctx: CanvasRenderingContext2D,
    setCtx: React.Dispatch<React.SetStateAction<CanvasRenderingContext2D | null>>
}

export default function useCanvas(w: number, h: number, id: string): useCanvasReturn
{
    const root = document.getElementById("root") as HTMLElement
    if(document.querySelector("#" + id))
    {
        root.removeChild( document.querySelector("#" + id))
    }
    const [canvas, setCanvas] = useState(document.createElement("canvas"))
    
    
    canvas.width = w;
    canvas.height = h
    canvas.id = id;

    

    console.log(root)
    
    root.appendChild(canvas);
    
    

    const [ctx, setCtx] = useState(canvas.getContext("2d"))
    if (!ctx) throw new Error("Could not get context");
    return {
        canvas,
        setCanvas,
        ctx,
        setCtx,
    }

    

}