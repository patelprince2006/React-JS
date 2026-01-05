
import './App.css';

function App() {
  var name="prince patel"
  // let age=24
  // const city="ahmedabad"

  function apple(){
    // alert("Button clicked")
    name="prince"
    // age=19
    // city="surat" --  give error because const value not change

    alert(name)
    // alert(age)
    // alert(city)
  }
  return (
    <div className="App">
     <h1>React Js</h1>
 
     {/* if we deaclare as a ---__ <button onClick={apple()}>Click me</button>__--- function call auto matically onclick di=ont't work */}

     <button onClick={() => apple()}>Click me For alert</button>  
     {/* or  onClick={apple} */}
    {/* <footer>created by prince patel</footer> */}
    </div>
  );
}

export default App;
