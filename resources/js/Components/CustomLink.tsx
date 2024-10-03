import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function CustomLink({ className = '', children, ...props }: InertiaLinkProps) {
    return (
        <Link
            {...props}
            className={`hover:text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
        >
            {children}
        </Link>
    );
}
