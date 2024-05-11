import './App.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import Quotes from './Components/Quotes';
import Demo from './Components/Demo';
import Product from './Components/Product';
import Users from './Components/Users';
import Todos from './Components/Todos';
import ViewProduct from './Components/ViewProduct';
import ViewUsers from './Components/ViewUsers';
import Cart from './Components/Cart';
import Videos from './Components/Videos';
import ViewVideos from './Components/ViewVideos';
import AddUser from './Components/AddUser';
import UserDetails from './Components/UserDetails';
import EditUser from './Components/EditUser';
import Employees from './Components/Employees';
import AddEmployee from './Components/AddEmployee'
import ViewEmployee from './Components/ViewEmployee';
import EmployeePasword from './Components/EmployeePassword';
import EditEmployee from './Components/EditEmployee';
import{Route, Routes, BrowserRouter} from 'react-router-dom';

//rfc to quickly set up components

function App() {
  return (

    // <div>
    //   <h1>Welcome to React!</h1>
    //   <iframe style={{borderRadius:"12px"}} title='songs' src="https://open.spotify.com/embed/playlist/6DFeDWg95wMIarainvHgvX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    // </div>

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<> <Header name="Home" color="crimson"/> <NavBar/> <MainSection/> </>}/>
          <Route path='/about' element={<> <Header name="About" color="blue"/> <NavBar/> <About/> </>} />
          <Route path='/contact' element={<>  <Header name="Contact" color="cadetblue"/> <NavBar/> <Contact/> </>}/>
          <Route path='/quotes' element={<> <Header name="Contact" color="steelblue"/> <NavBar/> <Quotes/> </>}/>
          <Route path='/demo' element={<> <Header name="Demo" color="purple"/> <NavBar/> <Demo/> </>}/>
          <Route path='/product' element={<> <Header name="Product" color="grey"/> <NavBar/>  <Product/> </>}/>
          <Route path='/users' element={<> <Header name="Users" color="navy"/> <NavBar/>  <Users/> </>}/>
          <Route path='/todos' element={<> <Header name="Todos" color="darkorange"/> <NavBar/>  <Todos/> </>}/>
          <Route path='/viewProduct' element={<> <Header name="View Product" color="grey"/> <NavBar/>  <ViewProduct/> </>}/>
          <Route path='/viewUsers' element={<> <Header name="View Users" color="darkgreen"/> <NavBar/>  <ViewUsers/> </>}/>
          <Route path='/cart' element={<> <Header name="Cart" color="pink"/> <NavBar/>  <Cart/> </>}/>
          <Route path='/videos' element={<> <Header name="Videos" color="gold"/> <NavBar/>  <Videos/> </>}/>
          <Route path='/viewvideos' element={<> <NavBar/>  <ViewVideos/> </>}/>
          <Route path='/addUser' element={<> <Header name="Users" color="grey"/> <NavBar/>  <AddUser/> </>}/>
          <Route path='/editUser' element={<> <Header name="Users" color="grey"/> <NavBar/>  <EditUser/> </>}/>
          <Route path='/viewUser' element={<> <Header name="Users" color="brown"/> <NavBar/>  <UserDetails/> </>}/>
          <Route path='/employees' element={<> <Header name="Employees" color="green"/> <NavBar/>  <Employees/> </>}/>
          <Route path='/addEmployee' element={<> <Header name="New Employee" color="deepskyblue"/> <NavBar/>  <AddEmployee/> </>}/>
          <Route path='/viewEmployee' element={<> <Header name="Employee" color="turquoise"/> <NavBar/>  <ViewEmployee/> </>}/>
          <Route path='/employeePassword' element={<> <Header name="Password" color="cornflowerblue"/> <NavBar/>  <EmployeePasword/> </>}/>
          <Route path='/editEmployee' element={<> <Header name="Edit Employee" color="cornflowerblue"/> <NavBar/>  <EditEmployee/> </>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
