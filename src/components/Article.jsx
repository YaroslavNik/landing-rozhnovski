import React from 'react'
import { createUseStyles } from 'react-jss';

const Article = ({title, description, text, textColor, float}) => {

    const styles = useStyles({textColor, float})

    return (
        <div className = {styles.root}>
            <h2>{title}</h2>
            <h3>{description}</h3>
            {text.map((str, index) => <p key = {index}>{str}</p> )}
        </div>
    )
}

const useStyles = createUseStyles({
    root: ({textColor, float}) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexBasis: '50%',
        textAlign: 'center',
        marginRight: float === 'left' ? '5%' : 0,
        marginLeft: float === 'right' ? '5%' : 0,
        color: textColor,

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
    }),
})

export default Article
