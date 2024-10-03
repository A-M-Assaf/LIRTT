import React from 'react';

type HeaderProps = {
    title: string;
    description?: string;
    withDivider?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Header({ title, description, className = '', withDivider = false, ...props }: HeaderProps) {
    return (
        <header {...props} className={className}>
            <h2 className="text-lg font-medium text-foreground"> {title} </h2>

            {description && <p className="text-description mt-1 text-sm"> {description} </p>}

            {withDivider && <hr className="my-4 border-gray-300" />}
        </header>
    );
}
