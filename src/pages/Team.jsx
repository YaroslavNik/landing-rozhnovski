import React from 'react'
import Article from '../components/Article'
import { team } from '../data/text'
import { createUseStyles } from 'react-jss';
import BackgroundImg from '../assets/images/bgTeam.jpeg'
import TeamImg from '../assets/images/TeamPhotos/Pavel.jpeg'

const Team = () => {

    const styles = useStyles()

    return (
        <div className = {styles.wrapper}>
            <div className = {`${styles.root} container`}>
                <h2 className = 'pages-title'>OUR TEAM</h2>
                <div className = {`${styles.content} flex-row`}>
                    <div className = {`${styles.images} pages-img`}/>
                    <Article
                        title = {team.title}
                        description = {team.description}
                        text = {team.text}
                        textColor = 'white'
                        float = 'right'
                    />
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    wrapper: {
        background: `url(${BackgroundImg}) center no-repeat`,
        backgroundSize: 'cover',
        height: '676px',
        width: '100%',
    },

    root: {
        height: '100%',
    },

    content: {
        height: '602px',
        alignItems: 'center',
    },

    images: {
        background: `url(${TeamImg}) center no-repeat`,
        backgroundSize: 'cover',
    }
})

export default Team
