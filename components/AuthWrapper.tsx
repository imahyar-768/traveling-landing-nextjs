import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import ProtectedRoute from './ProtectedRoute';

const authRoutes = ['/dashboard']

const AuthWrapper = ({children}: {children: React.ReactNode}) => {
    const router = useRouter();
    const { status } = useSession();

    if (status === 'loading') return null;

    return (
        <>{authRoutes.includes(router.pathname) ? (
            <ProtectedRoute>{children}</ProtectedRoute>
        ) : (
            children
        )}
        </>
    )
}

export default AuthWrapper;
