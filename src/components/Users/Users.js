import {Link} from "react-router-dom";

function Users () {
    return(
        <Link to={'/users'} style={{ textDecoration: 'none'}}><h1 style={{ marginLeft: 20}}>Получить список пользователей</h1></Link>
    )
}

export default Users;