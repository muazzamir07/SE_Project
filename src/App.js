import './App.css';
import {  BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './login';
import Home from './home';
import Register from './register';
import Search from './search';
import NavBar from './navBar';
import SignUp from './signup';
function App() {

  return (
     
<BrowserRouter>
<NavBar/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/search' element={<Search/>}/>

      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
</BrowserRouter>
    );
}

export default App;
/*
        <Switch>
        <Route exact from="/" render = {props=><home{...props}/>}/>
        <Route exact from="/contact" render = {props=><contact{...props}/>}/>              
        </Switch>
      <Router>
    <div>
      <Route exact path="/home">
        <home />
      </Route>
      <Route path="/contact">
        <contact />
      </Route>
      
      </div>
      </Router>,
      node
        <PermanentDrawerLeft/>
       
        */

/*
<AddWord/>  
      <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>
      </Router>

    <div className="App">
      <Login></Login>
    </div>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/signup' element={<Login/>}/>
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>
      </Router>


*/
