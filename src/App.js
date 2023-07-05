import logo from './logo.svg';
import './App.css';
import Button from './Components/UI/Button';
import Demo from './Components/Demo/Demo';
import { useCallback, useState } from 'react';




function App() {

  
 const[title,setTitle]=useState("list Items");

 const onChangeHandlere=useCallback(()=>{
  setTitle("New title");
  // console.log("new")
 },[])

const descendingOrder=()=>{

}

      
  
  return (
    <div>
     
   
   
    <Demo titles={title} items={[1,3,4,5,2]}/>
    <Button onClick={onChangeHandlere}>Click me Here</Button>

    {/* <Button onClick={descendingOrder}>DescendingOrder</Button> */}
   


    </div>
  );
}

export default App;
