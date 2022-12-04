import { useEffect, useState } from "react";
import Box from "../BOX/Box";
const FakeApi = () => {
    const [userdata, setUserData] = useState([]);

    //Method 1;
    // fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
    //     res.json().then(data => console.log(data))
    // }).catch(err => console.log(err));



    useEffect(() => {
        //Method-2
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setUserData(data);
                console.log('i ran', data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {userdata.map((item) => {
                return <Box key={item.id} title={item.title} />
            })}
        </div>
    )
}

export default FakeApi