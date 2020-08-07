import React, {useContext, useEffect, useState} from 'react'
import {} from './style/style.css'
import {useHttp} from "../hooks/http_hook";
import {useMessage} from "../hooks/message_hook";
import {AuthContext} from "../constext/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    useEffect(() =>{
        window.M.updateTextFields()
    },[])
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)

        } catch (e) {}
        }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)

        } catch (e) {}
    }
        return (
            <div>
                <div className="row">
                    <div className="window">

                        <div className="card-image">
                            <span className="card-text">Авторизація</span>
                            <img src="https://materializecss.com/images/sample-1.jpg" className="card-img" alt=""/>

                            <div className="card-content">
                                <div>
                                    <div className="input-email">
                                        <input placeholder="Введіть емейл"
                                               id="email "
                                               type="text"
                                               name="email"
                                               className="yellow-input"
                                               value={form.email}
                                               onChange={changeHandler}
                                        />

                                        <label htmlFor="email">Емейл</label>
                                    </div>
                                    <div className="input-password text-white">
                                        <input placeholder="Введіть Пароль"
                                               id="password"
                                               type="password"
                                               name="password"
                                               className="yellow-input"
                                               value={form.password}
                                               onChange={changeHandler}
                                        />
                                        <label htmlFor="email">Пароль</label>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button
                                        className="btn yellow darken-4"
                                        disabled={loading}
                                        onClick={loginHandler}
                                        style={{marginRight: 10}}
                                    >Віійти

                                    </button>
                                    <button
                                        className="btn grey lighten-1 black-text"
                                        onClick={registerHandler}
                                        disabled={loading}
                                    >Реєстрація
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
