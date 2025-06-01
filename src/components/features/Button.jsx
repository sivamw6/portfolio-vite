import { button as buttonStyle } from './Button.css';

/**
 * Button component that supports custom element type and styling.
 * @param {string} as - The element type to render (default: 'button')
 * @param {string} className - Additional class names
 * @param {ReactNode} children - Button content
 * @param {object} rest - Other props
 */
const Button = ({ as = 'button', className = '', children, ...rest }) => {
  const Component = as;
  const combinedClassName = [buttonStyle, className].filter(Boolean).join(' ');
  return (
    <Component className={combinedClassName} {...rest}>
      {children}
    </Component>
  );
};

export default Button; 