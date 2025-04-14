import canvas1 from '../images/canvas-1.jpg';
import canvas2 from '../images/canvas-2.jpg';
import canvas3 from '../images/canvas-3.jpg';


function AnimatedCanvas(){
    return(
        <div className="canvas">
            <img src={canvas1} alt="rock climbing" className="canvas__img canvas__img--1" />
            <img src={canvas2} alt="rock climbing" className="canvas__img canvas__img--2" />
            <img src={canvas3} alt="rock climbing" className="canvas__img canvas__img--3" />
        </div>
    )
}

export default AnimatedCanvas;