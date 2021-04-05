import React from 'react'
import { createUseStyles } from 'react-jss';
import AboutUsImg from '../assets/images/aboutUs.jpeg'
import {ReactComponent as BoxImg} from '../assets/images/aboutUsBox.svg'

const AboutUs = () => {

    const styles = useStyles()

    return (
        <div className = {`${styles.root} container flex-row`}>
            <div className = {styles.text}>
                <h2>about us</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h3>
                <p>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
            </div>
            <div className = {styles.images}>
                
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        padding: '100px 0',
        alignItems: 'center',
    },

    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexBasis: '50%',
        textAlign: 'center',
        marginRight: '5%',

        '& > h2': {
            fontSize: '32px',
            lineHeight: '48px',
            textTransform: 'uppercase',
            position: 'relative',
            marginBottom: '10px',

            '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '5px',
                background: '#E8C300',
                borderRadius: '50px'
            }
        },

        '& > h3': {
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },

        '& > p': {
            fontSize: '14px',
            lineHeight: '24px',
        }
    },

    images: {
        background: `url(${AboutUsImg}) center no-repeat`,
        width: '100%',
        maxWidth: '600px',
        height: '475px',
        backgroundSize: 'cover'
    }
})

export default AboutUs
