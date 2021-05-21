import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { filterMenuTitles } from '../data/text';

const DishesMenu = () => {
    const styles = useStyles({length: filterMenuTitles.length})
    const [activeFilter, setActiveFilter] = useState(null)

    return (
        <div className = {`${styles.root} container`}>

            <div className = {styles.title}>
                <h2 className = 'article-title'>Наши услуги</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
            </div>

            <div className = {`${styles.filterTitles} flex-row`}>
                {filterMenuTitles.map(el => <h3 key = {el}>{el}</h3>)}
            </div>

            <div className = {`${styles.filterItems} flex-row`}>
                {Array.from({length: 21}).map((el, index) => 
                    <div key = {index} className = {styles.filterItem}>
                        <p className = {styles.filterItemTitle}>
                            <h4>Услуга</h4>
                            <span>55,68 USD</span>
                        </p>
                        <p className = {styles.filterItemDescription}>Описание услуги</p>
                    </div>
                )}
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        paddingTop: '100px',
        paddingBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        marginBottom: '50px',

        '& h2': {
            marginBottom: '30px'
        },

        '& p': {
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    },

    filterTitles: ({length}) => ({
        width: '100%',
        maxWidth: '840px',
        marginBottom: '50px',

        '& > h3': {
            width: `${100/length}%`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#333333',
            fontSize: '13px',
            lineHeight: '16px',
            fontWeight: 'bold',
            height: '36px',
            cursor: 'pointer',
            position: 'relative',

            '&:hover': {
                color: '#E8C300'
            },

            '&:not(:last-child)::before': {
                position: 'absolute',
                content: '""',
                width: '1px',
                height: '100%',
                background: 'rgba(51, 51, 51, 0.2)',
                right: 0,
                top: 0
            }
        }
    }),

    filterItems: {
        flexWrap: 'wrap',
    },

    filterItem: {
        flexBasis: '33.3%',
        padding: '0 20px',
        paddingBottom: '20px',
        color: '#333333',
    },

    filterItemTitle: {
        display: 'flex',
        fontSize: '18px',
        lineHeight: '18px',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        
        '& > h4': {
            marginRight: '10px'
        },
    },

    filterItemDescription: {
        fontSize: '12px',
        lineHeight: '18px',
        color: '#999999',
    }
})

export default DishesMenu
