// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  //[data, setData]
  //use state is setting a initial value
  
  const changeCount = (value) => {
    // setCount(count + value);
    //to render data
    setCount((prev) => {
      if(prev < 0 || prev >= 20){
        return 0;
      }
      return prev + value;
    });
  };

  const mulCount = () => {
    // setCount(count * 2);
    setCount((prev) => {
      if(prev >= 20){
        return 0;
      }
      return prev * 2;
    });
  }

  return (
    <div className="App">
       <h3>Counter: {count}</h3>
        <div>
          <button onClick={() => changeCount(1)}>Add</button>
          <button onClick={() => changeCount(-1)}>Sub</button>
          <button onDoubleClick={mulCount}>Multiply by 2</button>
          <div className="note">Counter is  
            {count % 2 === 0 ? " Even" : " Odd"}
          </div>
        </div>
    </div>
  );
}

export default App;
