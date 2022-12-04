
// const Box = ({ name, id, value }) => {
const Box = ({ bg, title }) => {
    return (
        // <div style={style}>
        //     {/* this is a box - {props.value} */}
        //     {/* {console.log(props)} */}
        //     {/* <li>{props.name}</li>
        //     <li>{props.id}</li>
        //     <li>{props.my.id}</li>
        //     <li>{props.my.name}</li> */}
        //     <li>{name}</li>
        //     <li>{id}</li>
        //     <li>{value}</li>
        // </div>

        <div style={style}>
            {title}
        </div>
    )
}

export default Box;

const style = {
    height: '200px',
    width: '300px',
    border: '2px solid',
    margin: '10px',
    backgroundColor: 'red'
}