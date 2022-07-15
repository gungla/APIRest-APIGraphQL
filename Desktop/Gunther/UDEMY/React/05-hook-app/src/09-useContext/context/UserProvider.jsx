import { useState } from "react";
import { UserContext } from "./UserContect";

const user = {
    id: 123,
    name: 'Gunther Glahn',
    emai: 'gglahn@google.com'
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        //<UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
