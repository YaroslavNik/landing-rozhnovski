import React from 'react'
import { createUseStyles } from 'react-jss';
import Slider from "react-slick";
import BackgroundImg from '../assets/images/bgGallary.jpeg'
import SliderImg1 from '../assets/images/aboutUs.jpeg'
import SliderImg2 from '../assets/images/team.jpeg'
import { aboutUs, team } from '../data/text';
import Article from '../components/Article';

const settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

const Gallary = () => {

    const styles = useStyles()

    return (
        <div className = {`${styles.wrapper} wrapper`}>
            <div className = {`${styles.root} container`}>
                <h2 className = 'pages-title'>Gallary</h2>
                <Slider {...settings} className = {styles.slider}>

                    <div className = {`${styles.slide}`}>
                        <img src = {`${SliderImg1}`}/>
                        <Article
                            title = {team.title}
                            description = {team.description}
                            text = {team.text}
                            textColor = 'white'
                            float = 'right'
                        />
                    </div>

                    <div className = {`${styles.slide}`}>
                        <img src = {`${SliderImg2}`}/>
                        <Article
                            title = {aboutUs.title}
                            description = {aboutUs.description}
                            text = {aboutUs.text}
                            textColor = 'white'
                            float = 'right'
                        />
                    </div>

                </Slider>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    wrapper: {
        background: `url(${BackgroundImg}) center no-repeat`,
        backgroundSize: 'cover',
        paddingBottom: '30px'
    },

    slide: {
        height: '602px',
        alignItems: 'center',
        display: 'flex !important'
    },

    slider: {
        
    }
})

export default Gallary
