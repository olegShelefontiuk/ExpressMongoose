import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {ShopPage} from "./pages/ShopPage";
import {AuthPage} from "./pages/AuthPage";
import {DetailPage} from "./pages/DetailPage";


export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {

        return (

           <Switch>
            <Route path="/links" exact>
                <LinksPage />
            </Route>
               <Route path="/detail/:id">
                   <DetailPage />

               </Route>
               <Route path="/shop" exact>
                   <ShopPage />
                   </Route>
               <Route path="/create" exact>
                   <CreatePage />

               </Route>
               <Redirect to="/create" />
           </Switch>
        )
    }
    return (
        <Switch>
        <Route path="/" exact>
           <AuthPage />
           <Redirect to="/" />
        </Route>
        </Switch>
    )
}