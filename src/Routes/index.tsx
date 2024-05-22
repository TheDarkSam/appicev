import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export function Routes(){
    const contextData = useContext(AuthContext);
    console.log(contextData);
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}