import './assets/styles/Common.sass'
import AboutUs from './pages/AboutUs';
import Brand from './pages/Brand';

const App = () => {
  return (
    <div className = "root">
      <Brand/>
      <AboutUs/>
    </div>
  );
}

export default App;
