import Image from 'next/image';


const Diagram = ({ source, title, ...props }) => {
    return (
        <>
            <br />
            <figure style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }} {...props}>
                <Image src={source} alt={title} width={300} height={300} className="svgThemed" />
                <figcaption>
                    {title}
                </figcaption>
            </figure>
        </>
    )
}
export default Diagram;