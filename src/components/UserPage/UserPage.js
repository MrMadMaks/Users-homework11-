import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import c from './UserPage.module.css'

const UserPage = () => {

    const { id  } = useParams();

    const [user, setUsers] = useState( null )

    useEffect( () => {
        fetch(`https://reqres.in/api/users/${id}?per_page=12`)
            .then(response => response.json())
            .then(result => {
                setUsers(result.data)
            })
    }, [id] )

    return (
        <div>
            { user && (
               <div className={c.UserPage}>
                   <h2>{user['first_name']} {user['last_name']}</h2>
                   <img src={user['avatar']}/>
               </div>
            )}
        </div>

    )
}

export default UserPage;