import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http_hook";
import {AuthContext} from "../constext/AuthContext";
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')


    useEffect(() =>{
        window.M.updateTextFields()
    },[])

    const pressHandler = async event => {
    if(event.key === 'Enter') {
        try{
          const data = await request('/api/link/generate', 'POST', {from: link}, {
              Authorization: `Bearer ${auth.token}`
          })

           history.push(`/detail/${data.link._id}`)
        }catch (e) {}
    }
    }
    return (
        <div className="row">
            <div className="col s8 offset-2s" style={{ paddingTop: '2rem' }}>
                <div className="input-field">
                    <input placeholder="Введіть посилання"
                           id="link"
                           type="text"
                           value={link}

                           onChange={e => setLink(e.target.value)}
                           onKeyPress={pressHandler}
                    />

                    <label htmlFor="link">Введіть посилання</label>
                </div>
        </div>
        </div>
    )
}