import styles from './Button.module.scss'

const Button = ({ label, onClick }) => {
    return <button onClick={onClick} class={styles.button}>{label}</button>
}

export { Button }