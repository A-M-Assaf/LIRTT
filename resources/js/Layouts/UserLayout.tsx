import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import UserNavDropdown from '@/Components/UserNavDropdown';
import UserProfileDropdown from '@/Components/UserProfileDropdown';
import { User } from '@/types';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function UserLayout({ user, header, children }: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto" />
                                </Link>
                            </div>

                            {user && (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                        Dashboard
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        {user ? (
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="relative ms-3">
                                    <UserProfileDropdown userName={user.name} />
                                </div>
                            </div>
                        ) : (
                            <div className="sm:ms-6 sm:flex sm:items-center">
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-foreground ring-1 ring-transparent transition hover:text-foreground/70 focus:outline-none focus-visible:ring-primary"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-foreground ring-1 ring-transparent transition hover:text-foreground/70 focus:outline-none focus-visible:ring-primary"
                                >
                                    Register
                                </Link>
                            </div>
                        )}

                        {user && (
                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {user && <UserNavDropdown visibility={showingNavigationDropdown} user={user} />}
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
