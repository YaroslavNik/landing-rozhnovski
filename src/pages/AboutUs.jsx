import React from 'react'
import { createUseStyles } from 'react-jss';
import AboutUsImg from '../assets/images/aboutUs.jpeg'
import {ReactComponent as BoxImg} from '../assets/images/aboutUsBox.svg'
import Article from '../components/Article';
import { aboutUs } from '../data/text';

const AboutUs = () => {

    const styles = useStyles()

    return (
        <div>
        <div className = {`${styles.root} container flex-row`}>
           <Article
                title = {aboutUs.title}
                description = {aboutUs.description}
                text = {aboutUs.text}        
                textColor = 'black'
                float = 'left'   
           />
            <div className = {`${styles.images} pages-img`}/>
        </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        paddingTop: '100px',
        paddingBottom: '100px',
        alignItems: 'center',
    },

    images: {
        background: `url(${AboutUsImg}) center no-repeat`,
    }
})

export default AboutUs
