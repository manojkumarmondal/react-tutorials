
const Layout = ({ children }) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Layout;

const style = {
    border: '4px solid',
    padding: '3rem 10rem',
}