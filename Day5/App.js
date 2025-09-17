import logo from './logo.svg';
import './App.css';
import Datatable from './Components/Datatable';

const  Students=[
  {id:'2021IT01',name:'James',course:'IT'},
  {id:'2021IT02',name:'Kamal',course:'IT'},
  {id:'2021IT03',name:'Ann',course:'CS'},
  {id:'2021IT04',name:'GAya',course:'IT'},
  {id:'2021IT05',name:'Razim',course:'IT'},
  
]

function App() {
  return (
    <div className="App">
     <Datatable studata={Students}/>
        
    </div>
  );
}

export default App;



