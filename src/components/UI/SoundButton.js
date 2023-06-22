export default function SoundButton() {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_b_263_1025)">
                <rect
                    width="48"
                    height="48"
                    rx="24"
                    fill="black"
                    fillOpacity="0.01"
                />
                <path
                    d="M23 17L18 21H14V27H18L23 31V17Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M31.0691 16.9297C32.9438 18.805 33.9969 21.348 33.9969 23.9997C33.9969 26.6513 32.9438 29.1944 31.0691 31.0697M27.5391 20.4597C28.4764 21.3973 29.003 22.6689 29.003 23.9947C29.003 25.3205 28.4764 26.592 27.5391 27.5297"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="url(#paint0_linear_263_1025)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_263_1025"
                    x="-44"
                    y="-44"
                    width="136"
                    height="136"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="22" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_263_1025"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_263_1025"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_263_1025"
                    x1="6.51357"
                    y1="8.79332"
                    x2="42.5887"
                    y2="41.1608"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AFA7FF" />
                    <stop offset="0.25" stopColor="#867CFF" />
                    <stop offset="0.505208" stopColor="#7266FF" />
                    <stop offset="0.760417" stopColor="#4A3AFF" />
                    <stop offset="1" stopColor="#000099" />
                </linearGradient>
            </defs>
        </svg>
    )
}
