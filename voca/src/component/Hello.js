import World from "./World";
import { useState } from "react";

export default function Hello(){
    function showName(){
        console.log("Mike");
    }
    function showAge(age){
        console.log(age);
    }
    function showText(e){
        console.log(e.target.value);
    }
    
    const [name, setName] = useState("Mike");
    function changeName(){
        const newName = name == "Mike" ? "Jane" : "Mike";
        setName(newName);
    }

    

    return(
      <div>
          <h1>Hello!!!</h1>

          <World/>

          <button onClick={showName}>Show Name</button>
          <button onClick={()=>{
              showAge(40)
          }}>Show Age</button>

          <input type="text" onChange={showText}></input>
          <input type="text" onChange={(e)=>{
              console.log(e.target.value)
          }}></input>

          {/* useState 사용하기 */}
          <h2 id="name">{name}</h2>
          <button onClick={changeName}>이름을 바꾸는 버튼</button>


      </div>  
    );
}