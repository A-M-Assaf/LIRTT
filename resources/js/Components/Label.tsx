import { LabelHTMLAttributes } from 'react';

export default function Label({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label {...props} className={`text-label block text-sm ${className}`}>
            {value ? value : children}
        </label>
    );
}
