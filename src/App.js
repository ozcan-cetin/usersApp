import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './context/AuthContext';
import Home from './pages/Home';
import Register from './pages/Register';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
 <AuthContextProvider>
 <AppRouter/>
  </AuthContextProvider>
    </div>
  );
}

export default App;
