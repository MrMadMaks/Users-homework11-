import {Component} from "react";
import c from "./Card.module.css"

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        id: 0,
        email: '',
        firstName: '',
        lastName: '',
        avatar: ''
    }

    render() {

        const {email, firstName, lastName, avatar} = this.props

        return(
            <div className={c.card}>
                <div className={c.cardImage}>
                    <img src={avatar}/>
                </div>
                <h2 className={c.cardTitle}>
                    {firstName} {lastName}
                </h2>
                <div className={c.cardSubTitle}>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>
        )
    }
}