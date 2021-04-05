import './assets/styles/Common.sass'
import AboutUs from './pages/AboutUs';
import Brand from './pages/Brand';
import Team from './pages/Team';

const App = () => {
  return (
    <div className = "root">
      <Brand/>
      <AboutUs/>
      <Team/>
    </div>
  );
}

export default App;
