import './App.css';
import {Route, Routes, Outlet} from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserPage from "./components/UserPage/UserPage";
import Users from "./components/Users/Users";

const App = () => {

        return (
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Users/>}/>
                    <Route path={'/users'} element={<UsersLayout/>}>
                        <Route index element={<UserList/>}/>
                        <Route path={'/users:id'} element={<UserPage/>}/>
                    </Route>
                </Route>
            </Routes>

        )
}

function UsersLayout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

function Layout() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}


export default App;
