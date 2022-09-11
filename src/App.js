import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './context/AuthContext';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
 <AuthContextProvider>
 <ToastContainer />
 <AppRouter/>
  </AuthContextProvider>
    </div>
  );
}

export default App;
