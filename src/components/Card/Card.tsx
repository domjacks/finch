import styles from './Card.module.scss'

const Card = ({ title, children }) => {
    return (
        <div class={styles.card}>
            <h2 class={styles.title}>{title}</h2>
            {children}
        </div>
    )
}

export { Card }