const Canvas = () => {
    const canvas = document.querySelector(".myCanvas")
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    



        let ParticlesArray = []

        class Particles {
            constructor ( speedX, speedY, x, y, color ) {
                this.speedX = speedX
                this.speedY = speedY
                this.x = x
                this.y = y
                this.size = Math.random() * 8 + 2
                this.color = color
            }

            update( ) {

                this.x += this.speedX
                this.y += this.speedY
            }



            draw ( )  {
                
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        for ( let i = 0; i < 50; i++ ) {
            let speedY = Math.random() * 1.5 -1
            let speedX = Math.random() * 1.5 -1
            let x = Math.random() * window.innerWidth
            let y = Math.random() * window.innerHeight
            let colors = [ "#777777", "#385189", "#dddddd"]
            let color = colors[ Math.round((Math.random() * 3))]
            ParticlesArray.push( new Particles(speedX, speedY, x, y, color))
            ParticlesArray[i].draw()
        }

        window.onresize = function( ) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            for ( let i = 0; i < 50; i++ ) {
                let speedY = Math.random() * 1.5 -1
                let speedX = Math.random() * 1.5 -1
                let x = Math.random() * window.innerWidth
                let y = Math.random() * window.innerHeight
                ParticlesArray.push( new Particles(speedX, speedY, x, y))
                ParticlesArray[i].draw()
            }
        }

        function animate ( ) {

            ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
            for ( let i = 0; i < 50; i++ ) {
                if ( ParticlesArray[i].x >= window.innerWidth - 10) {
                    ParticlesArray[i].speedX =  ParticlesArray[i].speedX * -1
                }
                if ( ParticlesArray[i].x <= 0) {
                    ParticlesArray[i].speedX = ParticlesArray[i].speedX * -1
                }
                if ( ParticlesArray[i].y <= 0) {
                    ParticlesArray[i].speedY = ParticlesArray[i].speedY * -1
                }

                if ( ParticlesArray[i].y >= window.innerHeight ) {
                    ParticlesArray[i].speedY = ParticlesArray[i].speedY * -1
                }
                ParticlesArray[i].update()
                ParticlesArray[i].draw()
            }
            requestAnimationFrame(animate)
        }



        animate()
    
    

}
 
export default Canvas;