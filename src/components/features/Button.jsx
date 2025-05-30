import { button as buttonStyle } from './Button.css';

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