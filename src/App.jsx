
import Batsman from './batsman'
import './App.css'
import Counter from './counter'

function App() {

  function handleClick() {
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleClick5 = () => {
    alert('I am now clicked ')
  }
    
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert (newNum);
  }
  

  return (
    <>
      
          <h3>Get started with me</h3>

          <Batsman></Batsman>

          <Counter></Counter>

          





          {/* <button onclick = "handleClick()" >click Me</button> */}
          <button onClick={handleClick}>click Me</button>
          <button onClick={function handleClick2(){
            alert('clicked 2')
          }}>click Me 2</button>

          <button onClick={handleClick3}>click me 3</button>

          <button onClick={handleClick5}> click me now</button>

          <button onClick={() => alert('yes you are on right part')}> click me now and then</button>

          <button onClick={()=> handleAdd5(10)}>click add 6</button>


    </>
  )
}

export default App
