import './assets/styles/Common.sass'
import AboutUs from './pages/AboutUs';
import Brand from './pages/Brand';
import DishesMenu from './pages/DishesMenu';
import Gallary from './pages/Gallary';
import Team from './pages/Team';
import { teamGallary, photosGallary, aboutUs, waiting } from './data/text';
import BackgroundImgTeam from './assets/images/bgTeam.jpeg'
import Contacts from './pages/Contacts';
import Block from './components/Block';
import AboutUsImg from './assets/images/logo.jpeg'

const App = () => {
  return (
    <div className = "root">
      <Brand/>
      <Block block = {aboutUs} image = {AboutUsImg}/>
      <Gallary data = {teamGallary} title = 'Наша команда' background = {BackgroundImgTeam}/>
      <DishesMenu/>
      <Gallary title = 'Фотографии' data = {photosGallary} background = {BackgroundImgTeam}/>
      <Block block = {waiting} image = {AboutUsImg}/>
    </div>
  );
}

export default App;
