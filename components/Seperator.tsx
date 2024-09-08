import { AddIcon, BookIcon, HomeIcon, InfinityIcon, NodeJsIcon, ReactNativeIcon, VersionIcon } from "./icons"
import Tag from "./tag"

export default function titleComponent({ children }) {
    const iconStyle = {
        marginTop: '2px', marginRight: '10px', strokeWidth: '4px', height: '16px',
        fill: 'currentColor',
        stroke: 'currentColor'
    }

    if (children === 'Get Started') return (<><HomeIcon style={{
        ...iconStyle,
        strokeWidth: '1.5px'
    }} />{children}</>)
    if (children === 'Protocol') return (<div style={{ display: 'flex', flexDirection: 'row', }}><InfinityIcon style={{
        ...iconStyle,
        strokeWidth: '40px',
    }} />{children}</div>)
    if (children === 'Integration') return (<div style={{ display: 'flex', flexDirection: 'row', }}><AddIcon style={{
        ...iconStyle,
        strokeWidth: '40px',
    }} />{children}</div>)
    if (children === 'React') return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ReactNativeIcon style={{
                    marginTop: '3px', marginRight: '10px', height: '14px',
                }} />
                {children}
            </div>
            <Tag>
                Soon
            </Tag>
        </div>
    )
    if (children === 'React Native') return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ReactNativeIcon style={{
                    marginTop: '3px', marginRight: '10px', height: '14px',
                }} />
                {children}
            </div>
            <Tag>
                Soon
            </Tag>
        </div>
    )
    if (children === 'NodeJS') return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <NodeJsIcon style={{
                    marginTop: '2px', marginRight: '10px', height: '16px',
                }} />
                {children}
            </div>
            <Tag>
                Soon
            </Tag>
        </div>
    )
    if (children === 'Tutorials') return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <BookIcon style={{ ...iconStyle, strokeWidth: '0.5px', height: '20px', marginRight: '6px', marginTop: '0px', marginLeft: '-2px' }} />
            {children}
        </div>
    )
    if (children === 'V1') return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <VersionIcon style={{ ...iconStyle, strokeWidth: '0.5px', marginTop: '3px', height: '14px', marginRight: '10px' }} />
            {children}
        </div>
    )

    return <p style={{ paddingLeft: '6px', paddingRight: '6px' }}>{children}</p>
}

