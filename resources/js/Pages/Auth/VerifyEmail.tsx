import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthLayout>
            <Head title="Email Verification" />

            <div className="text-description mb-4 pt-2 text-sm">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                link we just emailed to you? If you didn't receive the email, we will gladly send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex justify-end">
                    <Link href={route('logout')} method="post">
                        <SecondaryButton>LOG OUT</SecondaryButton>
                    </Link>

                    <PrimaryButton className="ms-3" disabled={processing}>
                        Resend Verification Email
                    </PrimaryButton>
                </div>
            </form>
        </AuthLayout>
    );
}
