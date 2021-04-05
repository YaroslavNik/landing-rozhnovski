import React from 'react'
import { createUseStyles } from 'react-jss';
import {Link} from 'react-router-dom'

const links = ['Home', 'About', 'Team', 'Booking', 'Menu', 'Galarie', 'Events', 'Contacts']

const Header = () => {

    const styles = useStyles({length: links.length})

    return (
        <div className = {`${styles.root} flex-row`}>
            <div className = {`${styles.menu} flex-row`}>
                {links.map(el => <Link className = {styles.link} key = {el} to = {`/${el}`}>{el}</Link>)}
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        
    },

    menu: {
        justifyContent: 'space-between',
        position: 'relative',

        '&::before': {
            position: 'absolute',
            left: 0,
            bottom: 0,
            content: '""',
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.2)'
        }
    },

    link: ({length}) => ({
        color: 'white',
        fontSize: '12px',
        lineHeight: '100px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        width: `${100/length}%`,
        textAlign: 'center',
        height: '100px',
        background: 'none',

        '&:hover': {
            color: '#E8C300'
        }
    })
})

export default Header
