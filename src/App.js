// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//////////////////////////
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tasks from './components/tasks';
import AddTask from './components/addtask'
import { useEffect, useState } from 'react'
function App() {
  
  const [tasks,setask] = useState([
    {
        id:1,
        text: 'doctor required',
        day:'feb 5th at  2.30pm',
        reminder:true,
    },
    {
        id:2,
        text: 'computer requirement',
        day:'feb 5th at  2.30pm',
        reminder:true,
    },
    {
        id:3,
        text: 'my wife requirement',
        day:'feb 5th at  2.30pm',
        reminder:false,
    },
    
    
    
    ]);
    
//   var ary = [1,2,3,4]

// var b=ary.map(test)
// function test(x){
// return x*5;
// }
// window.alert(b)


//delete tasks
const deleteTask=(id) => {
   setask(tasks.filter((taske)=>taske.id !==id))
  
} // array is returned as taske in which the elements that id is not equal to (id that is coming)
//toggle reminder
const toggleReminder=(id) => {

  // setask(
  //   tasks.map((taske)=>
  //   // taske.id === id ? {...taske,reminder:
  //   //   !taske.reminder }:taske 
  //      )) // ...taske means pori array lo as it is bas reminder change maar do
      
let temptask=[...tasks]
temptask= temptask.map((task)=>{
  if(task.id===id)
  {
    return {...task,reminder:!task.reminder}
  }
  else
  {
    return task
  }
  
})
setask(temptask)
console.log(id)

  // setask(tasks.filter((taske)=>taske.id !==id))
//  tasks.filter((taske)=>{taskid === id})
//  taske.reminder='true';
//  console.log(taske.reminder)
} // array is returned as taske in which the elements that id is not equal to (id that is coming)

useEffect(()=>{
  console.log(tasks[0].reminder)
},[tasks])// [tasks] is depandancy array and useEffect is a hook which will check the depandant object for an update and then perform that function written in it

  return (
    <div className="container">
    
      <Header title='task tracker' color='purple' />
      <AddTask />
      {tasks.length >0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ): ("no task to show")}
     </div>
  );
}

export default App;


