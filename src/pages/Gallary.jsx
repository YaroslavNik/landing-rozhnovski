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

const Gallary = ({data, title, background}) => {

    const styles = useStyles({background})


    return (
        <div className = {`${styles.wrapper} wrapper`}>
            <div className = {`${styles.root} container`}>
                <h2 className = 'pages-title'>{title}</h2>
                <Slider {...settings} className = {styles.slider}>
                    {data.map(item => 
                        <div className = {`${styles.slide}`} key = {item.title}>
                            <img src = {item.img}/>
                            <Article
                                title = {item.title}
                                description = {item.description}
                                text = {item.text}
                                textColor = 'white'
                                float = 'right'
                            />
                        </div>
                    )}

                </Slider>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    wrapper: ({background}) => ({
        background: `url(${background}) center no-repeat`,
        backgroundSize: 'cover',
        paddingBottom: '30px'
    }),

    slide: {
        height: '602px',
        alignItems: 'center',
        display: 'flex !important',

        '& > img': {
            maxWidth: '500px',
            objectFit: 'cover'
        }
    },

    slider: {
        
    }
})

export default Gallary
