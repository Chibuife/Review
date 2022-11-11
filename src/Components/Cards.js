import { useState } from 'react';

const Card = ({review,active, setActiveActive})=>{
     const [translate, isTranslate] = useState(true)

     // function for previous button
    const previous = ()=>{
        isTranslate()
        active ===  0 ? setActiveActive(active += 3): setActiveActive(active-1);
    }

    // function for next button
    const next = ()=>{
        isTranslate(true)
        active ===  3 ? setActiveActive(active -= 3): setActiveActive(active+1);  
    }

    // function for random button
    const random = ()=>{
        active = Math.floor(Math.random()* 4)
        setActiveActive(active)
    }

    //setting the animation
   previous ? setTimeout(previous , 10000)  :  next ?  setTimeout(next , 10000) :   setTimeout(next , 10000);

    //JSX to return the card 
return(
    <div  className="card">
        <div className="slidecontainer">

         {/* direct entry of the json file */}
        <div data-set={review[active].id} key={review[active].id}  className= {translate ? 'active' : 'none'}>
        <div className="image">
        <div className="colon">"</div>
        <img src={review[active].img} alt="" />
        </div>
        <h3>{review[active].name}</h3>
        <h4>{review[active].position}</h4>
        <p>{review[active].description}</p>
        </div>
        
        {/* buttons */}
         </div>
        <div className="nextPreviousBtn">
        <div onClick={previous} className="previous">{`<`}</div>
        <div onClick={next} className="next">{`>`}</div>
        </div>
        <div onClick={random} className="random">Surprise me</div>
    </div>
)
}
export default Card;