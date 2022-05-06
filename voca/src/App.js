import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {

  const name = "Minseok";
  const naver = {
    name:"naver",
    url:"https://naver.com"
  };

  return(
    <div className="App">
      <h1
        style={{
          color:"#f0f",
          backgroundColor:"green",
        }}
      >Hello!!!!! {name} </h1>

      <p>{2+4}</p>

      <a href={naver.url}>{naver.name}</a>

      <Hello/>
      <Welcome/>
      
    </div>

  );

}

export default App;
