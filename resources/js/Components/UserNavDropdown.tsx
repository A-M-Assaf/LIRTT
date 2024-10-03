import { User } from '@/types';
import ResponsiveNavLink from './ResponsiveNavLink';

export default function UserNavDropdown({ visibility, user }: { visibility: boolean; user: User }) {
    return (
        <div className={(visibility ? 'block' : 'hidden') + ' sm:hidden'}>
            <div className="border-t border-gray-200 pb-1 pt-4">
                <div className="space-y-1 px-4 pb-3 pt-2">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                </div>

                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    );
}
