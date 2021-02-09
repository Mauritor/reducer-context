import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../contex/User/UserContext';

const Profile = () => {
    const { selectedUser } = useContext(UserContext)
    return (
        <>
            {selectedUser ? (
                <div className="card card-body text-center">
                    <img
                        src={selectedUser.avatar}
                        alt="user"
                        className="card-img-top rounded-circle m-auto img-fluid"
                        style={{ width: 160 }}
                    />
                    <h3>{`${selectedUser.first_name} ${selectedUser.last_name} `}</h3>
                    <p>{selectedUser.email}</p>
                </div>) : (<h1 className="text-info">No User Selected</h1>)}
        </>
    )
}

export default Profile
