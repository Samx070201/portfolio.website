import { useEffect, useRef } from "react"

const CursorHighlight = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      window.onmousemove = event => {
        const canvas = canvasRef.current

        if (!canvas) {
          return
        }

        var ctx = canvas.getContext("2d")

        if (!ctx) {
          return
        }

        setTimeout(() => {
          ctx!.clearRect(0, 0, canvas.width, canvas.height)

          ctx!.fillStyle = "green"

          ctx!.beginPath()
          ctx!.arc(event.clientX, event.clientY, 35, 0, 2 * Math.PI)
          ctx!.fill()
        }, 75)
      }

      return () => {
        window.onmousemove = null
      }
    }
  }, [canvasRef])

  return (
    <canvas
      id="cursorHighlight"
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 0,
      }}
    />
  )
}

export default CursorHighlight
