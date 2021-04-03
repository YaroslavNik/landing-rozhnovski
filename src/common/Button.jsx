import React from 'react'
import { createUseStyles } from 'react-jss'

const Button = ({className, bgColor, color, borderColor, label, maxWidth}) => {
    const styles = useStyles({maxWidth})

    return (
        <button className={`${styles.root} ${className}`}>{label}</button>
    )
}

const useStyles = createUseStyles({
    root: ({maxWidth}) => ({
        height: '60px',
        borderRadius: '5px',
        width: '100%',
        maxWidth: maxWidth,
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '20px'
    })
})

export default Button
