import styles from './Button.module.css';

/**
 * Button component.
 */
export const Button = ({ onClick: handleClick, children }) => {
  return <div class={styles} onClick={handleClick}>{children}</div>;
};
