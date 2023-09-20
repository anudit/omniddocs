
export const HomeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24" {...props}>
            <path d="M9.5 17.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
            <path fillRule="evenodd" d="M14.2 2.6a3.5 3.5 0 0 0-4.4 0L3.3 7.7A3.5 3.5 0 0 0 2 10.5v8A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-8a3.5 3.5 0 0 0-1.3-2.8zm-3.7.8a2.5 2.5 0 0 1 3 0l6.5 5a2.5 2.5 0 0 1 1 2v8.1a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-8a2.5 2.5 0 0 1 1-2z" clipRule="evenodd" />
        </svg>
    )
}
export const InfinityIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512"  {...props}>
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
                <path d="M120 356a100 100 0 0 1 0-200m272 0a100 100 0 0 1 0 200M120 156c100 0 172 200 272 200" />
                <path d="M392 156c-100 0-172 200-272 200" />
            </g>
        </svg>
    )
}

export const AddIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 683 683"  {...props}>
            <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" />
                </clipPath>
            </defs>
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="53.3" d="M341 221v240M221 341h240" />
            <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 683)">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40" d="M378 54a236 236 0 1 0 74 71" />
            </g>
        </svg>
    )
}

export const ReactNativeIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.2 23 20.5" {...props}>
            <circle r="2" fill="#61dafb" />
            <g fill="none" stroke="#61dafb">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    )
}

export const NodeJsIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 289" {...props}>
            <path fill="#539e43" d="M128 288.5c-4 0-7.7-1.1-11.1-3l-35.3-20.9c-5.3-2.9-2.6-4-1-4.5 7.1-2.4 8.4-3 15.9-7.1.8-.6 1.8-.3 2.6.2l27 16.2c1.1.5 2.4.5 3.2 0l105.8-61.2c1-.6 1.6-1.6 1.6-3v-122c0-1.3-.6-2.4-1.6-3L129.3 19.3c-1-.5-2.4-.5-3.2 0l-105.7 61c-1 .5-1.6 1.8-1.6 2.9v122.2c0 1 .5 2.3 1.6 2.9L49.3 225c15.6 8 25.4-1.4 25.4-10.6V93.7c0-1.6 1.4-3.2 3.2-3.2h13.5c1.6 0 3.2 1.3 3.2 3.2v120.6c0 20.9-11.4 33-31.3 33-6 0-10.8 0-24.3-6.5l-27.9-16A22.4 22.4 0 0 1 0 205.6V83.3C0 75.4 4.2 68 11.1 64L117 2.8a23.7 23.7 0 0 1 22.2 0L245 64c6.9 4 11.1 11.4 11.1 19.3v122.2c0 8-4.2 15.4-11.1 19.4L139 286a27.1 27.1 0 0 1-11.1 2.4zm32.6-84c-46.4 0-56-21.2-56-39.3 0-1.6 1.4-3.1 3.3-3.1h13.7c1.6 0 3 1 3 2.6 2 14 8.2 21 36.3 21 22.2 0 31.8-5.1 31.8-17 0-7-2.7-12-37.4-15.4-28.9-3-47-9.3-47-32.3 0-21.5 18.1-34.2 48.3-34.2 34 0 50.6 11.7 52.8 37 0 .9-.3 1.7-.8 2.5-.6.5-1.4 1-2.2 1h-13.7c-1.4 0-2.7-1-3-2.3-3.1-14.6-11.3-19.4-33-19.4-24.5 0-27.4 8.5-27.4 14.8 0 7.7 3.5 10.1 36.3 14.4 32.6 4.2 48 10.3 48 33-.3 23.4-19.3 36.7-53 36.7z" />
        </svg>
    )
}

export const BookIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 64 64" {...props}>
            <path d="M54.2 12.2a6 6 0 0 0-4.4-1.7c-7 .2-12.5 1.7-16.7 4.5a2 2 0 0 1-2.2 0 32.3 32.3 0 0 0-16.7-4.5 6 6 0 0 0-4.4 1.7A6 6 0 0 0 8 16.5v26a6 6 0 0 0 5.8 6c6 .3 11.2 1.6 15 4a6 6 0 0 0 6.3 0c4-2.4 9-3.7 15.1-4a6 6 0 0 0 5.8-6v-26a6 6 0 0 0-1.8-4.3zM13.9 44.6a2 2 0 0 1-1.9-2v-26a2 2 0 0 1 .6-1.5 2 2 0 0 1 1.4-.6c6.2.2 11.2 1.5 14.7 3.8a6 6 0 0 0 1.3.6v29.7a34.5 34.5 0 0 0-16.1-4zm38.1-2a2 2 0 0 1-1.9 2 34.5 34.5 0 0 0-16.1 4V19a6 6 0 0 0 1.3-.6c3.5-2.3 8.5-3.6 14.6-3.8a2 2 0 0 1 1.5.6 2 2 0 0 1 .6 1.4z" />
        </svg>
    )
}
export const VersionIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24" {...props}>
            <path fillRule="evenodd" d="M10 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zm-.5-2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5zM6.2 4.2a.8.8 0 0 1-.4 1 1 1 0 0 0-.3.2.4.4 0 0 0 0 .1v13.1l.3.2a.8.8 0 1 1-.6 1.4c-.3-.2-.6-.3-.8-.6-.3-.3-.4-.7-.4-1.1v-13c0-.4.1-.8.4-1 .2-.4.5-.5.8-.7a.8.8 0 0 1 1 .4zm-4 1.4a.8.8 0 0 1-.3 1l-.3.3-.1.1v10.1l.4.3a.8.8 0 1 1-.8 1.2C.7 18.4 0 18 0 17V7c0-1 .7-1.4 1.1-1.6a.8.8 0 0 1 1 .2z" clipRule="evenodd" />
        </svg>
    )
}


