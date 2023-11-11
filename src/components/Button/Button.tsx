import styles from './Button.module.scss'

const Button = ({ Icon, label, size = '', onClick = () => {} }) => {
    const smallClass = size === 'small' ? styles.small : ''
    return (
        <button onClick={onClick} class={`${styles.button} ${smallClass}`}>
            <Icon height='30'/>{label}
        </button>
    )
}

export { Button }