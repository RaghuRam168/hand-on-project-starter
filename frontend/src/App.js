import './App.css';
import LoginPage from './pages/LoginScreen/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterScreen/RegisterPage';
import{BrowserRouter as Router , Routes , Route , useLocation} from 'react-router-dom'
import Error from './pages/ErrorPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Banner from './components/Dashboard/Banner';
import Navbar2 from './components/Navbar/Navbar2';
import RowColoum from './components/RowColoum';
import Title from './components/UI/Title';
import UploadImage from './components/UploadImage/UploadImage';
import BackgroundRemoverScreen from './pages/BackgroundRemover/BackgroundRemoverScreen';
import MyAPIs from './pages/MyApis/MyAPIs';
import MyAccount from './pages/Profile/MyAccount';
import NewAPIModal from './components/NewAPIModal/NewAPIModal';
function App() {
  return (


    <Router>
    <Navbar2/>
    {/* <NewAPIModal/> */}
      <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/dash-board' element={<Dashboard/>}/>
          <Route path='/background-remover' element={<BackgroundRemoverScreen/>}/>
          <Route path = '/my-api' element={<MyAPIs/>}/>
          <Route path='/new-api' element={<NewAPIModal/>} />
          <Route path='/my-account' element={<MyAccount/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  //   <Banner/>
    


  );
}

export default App;
