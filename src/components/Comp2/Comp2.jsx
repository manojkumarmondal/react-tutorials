
import Box from '../BOX/Box';
import './style.css';

// const my = {
//     id: 1, name: 'manoj'
// }
// const arr = [1, 2, 3, 4];
const Comp2 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* <Box value={arr[1]} name={my.name} id={my.id} limit="limit" myarr={arr} my={my} /> */}
            {/* <Box value="2" />
            <Box value="3" /> */}
            <Box bg="red" />
            <Box bg="blue" />
            <Box bg="green" />
            <Box bg="yellow" />
        </div>
    )
}

export default Comp2
