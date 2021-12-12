import c from './UserList.module.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UserList = () => {

    const [users, setUsers] = useState( [] )

    useEffect( () => {
        fetch('https://reqres.in/api/users?per_page=12')
            .then(response => response.json())
            .then(result => {
                setUsers(result.data)
            })
    }, [] )

    return (

            <div className={c.App}>
                <h1>Список пользователей</h1>

                    {users.map(item => (

                        <Link key={item.id} to={`/users/${item.id}`} className={c.link}><li className={c.links}>{item['first_name']}</li></Link>

                    ))}

            </div>
    )
}


export default UserList;