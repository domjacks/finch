import styles from './Card.module.scss'

const Card = ({ size, title, children }) => {

    return (
        <div class={`${styles.card} ${styles[size]}`}>
            <h2 class={styles.title}>{title}</h2>
            {children}
        </div>
    )
}

export { Card }