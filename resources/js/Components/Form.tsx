import { FormHTMLAttributes } from 'react';

export default function Form({ children, className = '', ...props }: FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form noValidate {...props} className={className}>
            {children}
        </form>
    );
}
