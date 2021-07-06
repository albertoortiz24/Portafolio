import "./intro.scss"
import { init } from 'ityped'
import { useEffect,useRef } from "react"
//import { current } from "immer/dist/internal";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
        { showCursor: true,
          backDelay:1500,
          backSpeed:60,    
          strings: 
        ['Developer', 'Designer','With React JS' ] 
        })
    }, [])


    return (
        <div className='intro' id="intro">
            <div className="left" >
                <div className="imgContainer">
                    <img src="assets/perfil.png" alt="" />
                </div>
            </div>
            <div className="right" >
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Alberto Ortiz</h1>
                    <h3>Web <span ref={textRef} ></span></h3>
                </div>
                <a href="#portafolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
