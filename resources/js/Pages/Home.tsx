import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Home({ auth }: PageProps) {
    console.log(auth);
    return (
        <UserLayout user={auth.user}>
            <Head title="Home" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-foreground">Welcome!</div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
