import {useEffect, useState} from "react";
import axios from 'axios'

const App = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("/api/users").then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            <h1>Users:</h1>
            <div>{users.map(user => <div key={user._id}>
                <h4>User: {user.name}</h4>
                <h4>User: {user.email}</h4>
                <h4>User: {user.age}</h4>
            </div>)}
            </div>
        </div>
    );
}

export default App;
