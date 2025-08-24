import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

export default function ConfirmPassword() {
    return (
        <AuthLayout
            title="Confirm your password"
            description="This is a secure area of the application. Please confirm your password before continuing."
        >
            <Head title="Confirm password" />

            <form method="post" action={route('password.confirm')} className="space-y-6">
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" name="password" placeholder="Password" autoComplete="current-password" autoFocus />
                </div>

                <div className="flex items-center">
                    <Button type="submit" className="w-full">
                        Confirm password
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
