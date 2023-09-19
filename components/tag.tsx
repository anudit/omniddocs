const Tag = ({ children }) => {
    return (
        <div style={{
            color: '#4984fd',
            fontWeight: '500',
            fontSize: '0.75rem',
            lineHeight: '1rem',
            paddingTop: '0.125rem',
            paddingBottom: '0.125rem',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            backgroundColor: 'rgba(36, 107, 253, 0.2)',
            borderRadius: '1rem'
        }}>
            {children}
        </div>
    )
}

export default Tag;