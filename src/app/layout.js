import AuthProvider from '@/utils/AuthProvider'
import Nav from '@/components/Nav'

export const metadata = {
    title: 'Mémoire Vive',
}

export default function AppLayout({ children }) {
    return (
        <AuthProvider>
            <html lang="en">
                <Nav />
                <body>
                    <main>{children}</main>
                </body>
            </html>
        </AuthProvider>
    )
}
