import { useAuthContext } from './context/AuthContext';
import { useThemeContext } from './context/ThemeContext';
import Router from './router';

function App() {
  const { role } = useAuthContext();
  const { theme } = useThemeContext();
  return (
    <div className='app'>
      <Router />
    </div>
  );
}

export default App;
