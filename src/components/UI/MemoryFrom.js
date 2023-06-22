import { BsMessenger } from 'react-icons/bs'

export default function MemoryFrom({ fontSize, social }) {
    return (
        <div className="items-center flex">
            <span style={{ fontSize: fontSize + 'vw' ?? 'inherit' }}>
                From {social}
            </span>
            {social === 'Messenger' && (
                <BsMessenger
                    className="ml-[0.55vw]"
                    style={{ fontSize: fontSize + 'vw' ?? 'inherit' }}
                />
            )}
        </div>
    )
}
