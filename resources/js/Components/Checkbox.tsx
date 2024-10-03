import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={`rounded border-gray-400 text-primary shadow-sm hover:bg-primary focus:ring-primary focus:ring-offset-1 ${className}`}
        />
    );
}
