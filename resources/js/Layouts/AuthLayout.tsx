import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-background pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6 w-full overflow-hidden rounded-lg bg-white px-6 py-4 shadow-md sm:max-w-md">
                <div className="mb-4 mt-2 flex justify-center">
                    <Link href="/">
                        <ApplicationLogo className="h-20 w-auto" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
