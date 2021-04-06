import './assets/styles/Common.sass'
import AboutUs from './pages/AboutUs';
import Brand from './pages/Brand';
import DishesMenu from './pages/DishesMenu';
import Gallary from './pages/Gallary';
import Team from './pages/Team';

const App = () => {
  return (
    <div className = "root">
      <Brand/>
      <AboutUs/>
      <Team/>
      <DishesMenu/>
      <Gallary/>
    </div>
  );
}

export default App;
