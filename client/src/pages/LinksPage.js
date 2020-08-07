import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http_hook";
import {AuthContext} from "../constext/AuthContext";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const fetchedLincs = useCallback( async() =>{
        try{
          const fetched = await request('api/link', 'GET', null, {
              Authorization: `Bearer ${token}`
          })
            setLinks(fetched)
        }catch (e) {}
    },[token, request])

    useEffect(() => {
        fetchedLincs()
    },[fetchedLincs])

    if(loading) {
        return <Loader />
    }
    return (
        <>
            {!loading && <LinksList links={links} />}

        </>
    )
}