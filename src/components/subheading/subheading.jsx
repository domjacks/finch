import styles from './App.module.css';

/**
 * Subheading component.
 */
export const Subheading = ({ className, children }) => {
  return <p class={className}>{children}</p>;
};
