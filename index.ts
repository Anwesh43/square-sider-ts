const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 3 
const scGap : number = 0.02 / 3
const strokeFactor : number = 90 
const sizeFactor : number = 8.9 
const delay : number = 20 
const colors : Array<string> = [
    "#b71c1c",
    "#4A148C",
    "#880E4F",
    "#1A237E",
    "#1B5E20"
]
const backColor : string = "#bdbdbd"

class ScaleUtil {

    static maxScale(scale : number, i : number,  n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}