import Checkbox from '@/Components/Checkbox';
import CustomLink from '@/Components/CustomLink';
import Form from '@/Components/Form';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthLayout from '@/Layouts/AuthLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

            <Form onSubmit={submit}>
                <div>
                    <Label htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <div className="flex items-center">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />

                        <Label htmlFor="remember" className="ms-2" value="Remember me" />
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <CustomLink
                            href={route('password.request')}
                            className="text-label rounded-md text-sm font-medium"
                        >
                            Forgot your password?
                        </CustomLink>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </Form>
        </AuthLayout>
    );
}
