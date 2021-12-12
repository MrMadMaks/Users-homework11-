import {Component} from "react";
import c from "./CardList.module.css"
import Card from "../Card/Card";

export default class CardList extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        userList: []
    }

    render() {


        return(
            <div className={c.cardList}>

                {
                    this.props.userList.map((user) => {
                        return(
                            <Card
                                key={user.id}
                                id={user.id}
                                email={user.email}
                                firstName={user['first_name']}
                                lastName={user['last_name']}
                                avatar={user['avatar']} />
                        )
                    })
                }
            </div>
        )
    }
}