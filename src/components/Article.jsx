import React from 'react'
import { createUseStyles } from 'react-jss';

const Article = ({title, description, text, textColor, float}) => {

    const styles = useStyles({textColor, float})

    return (
        <div className = {styles.root}>
            <h2 className = 'article-title'>{title}</h2>
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
