export default function Logo({ fontSize, color }) {
    const cubeDimension = fontSize * 0.2

    return (
        <div
            className="flex flex-col items-center font-bit uppercase leading-[0.8]"
            style={{ color: color, fontSize: `${fontSize}vw` }}
        >
            <span>Mémoire</span>
            <div className="flex items-center justify-between w-full">
                <div
                    style={{
                        width: `${cubeDimension}vw`,
                        height: `${cubeDimension}vw`,
                        background: color,
                        transform: 'translateY(-0.2vw)',
                    }}
                ></div>
                <span>Vive</span>
                <div
                    style={{
                        width: `${cubeDimension}vw`,
                        height: `${cubeDimension}vw`,
                        background: color,
                        transform: 'translateY(-0.2vw)',
                    }}
                ></div>
            </div>
        </div>
    )
}
