import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./components/AddEdit";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <ToastContainer position="top-center"/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/addContact" element={<AddEdit/>}/>
          <Route  path="/update/:id" element={<AddEdit/>}/>
          <Route  path="/view/:id" element={<AddEdit/>}/>
        </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
