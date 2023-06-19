import AuthProvider from '@/utils/AuthProvider'
import Nav from '@/components/Nav'

export const metadata = {
    title: 'Mémoire Vive',
}

import '@/styles/app.scss'

export default function AppLayout({ children }) {
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    <Nav />
                    <main>{children}</main>
                </body>
            </html>
        </AuthProvider>
    )
}
