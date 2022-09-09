import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './context/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
 <AuthContextProvider>
<Register/>
<Home/>
  </AuthContextProvider>
    </div>
  );
}

export default App;
