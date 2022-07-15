import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers, } from "../store/action-creators/user";
import {useDispatch} from "react-redux";

const UserList: React.FC= () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

    }, [] )

    if (loading) {
        return  <h1>Идет загрузка...</h1>
    }
    if (error) {
        return  <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <h3 key={user.id}>{user.name}</h3>
            )}
        </div>
    );
};

export default UserList;