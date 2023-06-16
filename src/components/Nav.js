import { SignInButton, SignOutButton } from '@/components/AuthButtons'

export default function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Log out</li>
                </ul>
                <ul>
                    <li>
                        <SignInButton />
                    </li>
                    <li>
                        <SignOutButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
