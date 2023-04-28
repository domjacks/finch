import styles from './App.module.css';

/**
 * Paragraph component.
 */
export const Paragraph = ({ className, children }) => {
  return <p class={className}>{children}</p>;
};
