import React from 'react'
import { createUseStyles } from 'react-jss';
import Article from './Article';

const Block = ({block, image}) => {

    const styles = useStyles({image})

    return (
        <div>
        <div className = {`${styles.root} container flex-row`}>
           <Article
                title = {block.title}
                description = {block.description}
                text = {block.text}        
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

    images: ({image}) => ({
        background: `url(${image}) center no-repeat`,
        backgroundSize: 'contain',
    })
})

export default Block
