import React from 'react'
import { createUseStyles } from 'react-jss';
import Header from '../components/Header';
import BackgroundImg from '../assets/images/bgAbout.jpeg'
import Button from '../common/Button';
import {ReactComponent as FacebookImg} from '../assets/images/iconFacebook.svg'
import {ReactComponent as TwitterImg} from '../assets/images/iconTwitter.svg'
import {ReactComponent as InstagramImg} from '../assets/images/iconInstagram.svg'

const AboutUs = () => {

    const styles = useStyles();

    return (
        <div className = {styles.root}>
            <div className = {`${styles.content} container`}>
                <Header/>
                <div className = {`${styles.main} flex-row`}>
                    <div className = {styles.time}>
                        <p>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
                    </div>
                    <div className = {styles.title}>
                        <span>RESTAURANT</span>
                        <h1>hungry people</h1>
                        <div className = {`${styles.buttons} flex-row`}>
                            <Button label = 'Book Table' className = 'btn-yellow' maxWidth = '200px'/>
                            <Button label = 'Explore' className = 'btn-transparent' maxWidth = '200px'/>
                        </div>
                    </div>
                    <div className = {styles.links}>
                        <a href = '#' target = '_blank'>
                            <FacebookImg/>
                        </a>
                        <a href = '#' target = '_blank'>
                            <TwitterImg/>
                        </a>
                        <a href = '#' target = '_blank'>
                            <InstagramImg/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        height: '100vh',
        width: '100%',
        background: `url(${BackgroundImg}) center no-repeat`,
        backgroundSize: 'cover',
        color: 'white',
    },

    content: {
        height: '100%',
    },

    main: {
        alignItems: 'center',
        height: 'calc(100% - 100px)',
        justifyContent: 'space-between',

        '& > *': {
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
    },

    time: {
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        paddingLeft: '10px'
    },

    buttons: {
        justifyContent: 'space-between',
        maxWidth: '440px'
    },

    links: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '10px',

        '& > a': {
            '&:hover': {
                '& path': {
                   fill: '#E8C300' 
                },
                '& circle': {
                    stroke: '#E8C300'
                }
            },

            '&:not(:last-child)': {
                marginBottom: '20px'
            }
        }
    },

    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: '0px 30px',

        '&::before': {
            position: 'absolute',
            top: 0,
            left: 0,
            content: '""',
            height: '100%',
            width: '1px',
            background: 'rgba(255, 255, 255, 0.2)'
        },

        '&::after': {
            position: 'absolute',
            top: 0,
            right: 0,
            content: '""',
            height: '100%',
            width: '1px',
            background: 'rgba(255, 255, 255, 0.2)'
        },

        '& span': {
            fontSize: '12px',
            lineHeight: '14px',
            letterSpacing: '0.5em'
        },

        '& h1': {
            fontSize: '96px',
            position: 'relative',
            lineHeight: '140px',
            marginBottom: '36px',
            textAlign: 'center',

            '&::before': {
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: 0,
                content: '""',
                width: '60px',
                height: '5px',
                background: '#E8C300',
                borderRadius: '5px'
            }
        }
    }
})

export default AboutUs


