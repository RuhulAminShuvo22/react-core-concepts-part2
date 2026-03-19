import { useState } from "react"

export default function Batsman () {

    let [runs, setRuns] = useState(0);

    const [sixes , setSixes ] = useState(0);

    const [fours , setFours] = useState(0);

    const handleSingle =()=> {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);

    }

    const handleFour = ()=> {
        const updatedRuns = runs + 4;
        const updatedFours = fours + 1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }

    const  handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes)
        setRuns(updatedRuns)
    }
    return (
        <div>
            <h3>player: Bangla Batsman</h3>
            <p>six : {sixes}</p>
            <p>four : {fours} </p>

            {
                runs > 100 && <p> CONG !!! you Score : 100 </p>
            }
            {
                runs > 50 &&  <p>you score : 50</p>
                
            }

            
            <h1>Score:{runs} </h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )

}