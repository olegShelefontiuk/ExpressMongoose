import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../constext/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')

}
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Скоротити посилання</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Створити</NavLink></li>
                    <li><NavLink to="/links">Посилання</NavLink></li>
                    <li><NavLink to="/detail">Деталі</NavLink></li>
                    <li><NavLink to="/shop">Магазин</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Вихід</a></li>

                </ul>
            </div>
        </nav>
    )
}