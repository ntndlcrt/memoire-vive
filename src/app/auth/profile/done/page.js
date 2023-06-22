import Link from 'next/link'

export default function Page() {
    return (
        <div className="flex flex-col text-center items-center justify-center">
            <h3 className="leading-[0.9] flex flex-col items-center text-center mb-[2.22vw]">
                <span className="text-[4vw] font-light">
                    Done ! You can now access
                </span>
                <span className="font-bit text-[6.5vw]">Mémoire Vive</span>
            </h3>
            <Link href="/" className="button">
                Return to homepage
            </Link>
        </div>
    )
}
