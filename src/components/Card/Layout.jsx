import React from 'react'

const Layout = ({ children }) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Layout;

const style = {
    height: 400,
    width: 300,
    border: '1px solid'
}