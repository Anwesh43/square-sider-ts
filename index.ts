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
const blocks : number = 3

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

    static updateFromTo(to : number, from : number, scale : number) {
        return from + (to - from) * scale 
    }
}


class DrawingUtil {

    static drawSquareSider(context : CanvasRenderingContext2D, scale : number) {
        const size : number = Math.min(w, h) / sizeFactor 
        const sf : number = ScaleUtil.sinify(scale)
        const sf1 : number = ScaleUtil.divideScale(sf, 0, parts)
        const sf2 : number = ScaleUtil.divideScale(sf, 1, parts)
        context.save()
        context.translate(w / 2, h / 2)
        for (var j = 0; j < blocks; j++) {
            const rSize : number = size * sf1
            const y : number = (h / 2 - size) * sf2 
            const x : number = ScaleUtil.updateFromTo((j - 1) * (w / 2 - size), 0, sf2)
            context.save()
            context.translate(x, y)
            context.fillRect(-rSize, -rSize, rSize * 2, rSize * 2)
            context.restore()
        }
        context.restore()
    }

    static drawSSNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.fillStyle = colors[i]
        context.fillRect(0, 0, w, h)
    }
}