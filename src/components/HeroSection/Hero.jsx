import './Hero.css'
import { FaPlay } from "react-icons/fa";
function Hero() {
  return (
    <main>
         <div className="container">
          <div className='left'>
            <h1>
              <span id='span-text'>Studying</span>
                Online is now much easier
            </h1>
            <p>Skilline is an interesting platform that will teach <br/> you in more an interactive way</p>
            <div className='btns'> <button>Join for free</button>
            <button><FaPlay /></button></div>
          </div>
          <div className='img-box'>
            <img src="https://i.ibb.co/fV040Zc9/hero.png" alt=""/>
          </div>
        </div>
    </main>
  )
}

export default Hero