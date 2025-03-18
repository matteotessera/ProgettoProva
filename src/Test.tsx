import { useState } from "react";


function Test (){
    // State
    const [users, setUser] = useState([
        {id:0, username: 'username'},
    ])

    const [usernameInput, setUsernameInput] = useState(''); 


    // Methods
    const addUser = () => {
        let maxId = 0;

        for(const user of users){
            if(user.id > maxId){
                maxId = user.id;
            }
        }
        maxId ++;

        const newUsers = [
            ...users,
            //{idInput, usernameInput},
            {id: maxId, username: usernameInput},
            //{id:4, username: 'pFranchi'},
        ];
        setUser(newUsers);
        setUsernameInput('');
    }

    const remUser = () => {      
        const newUsers = users.filter(users => {
            const isIncluded = users.username !== usernameInput;
            return(isIncluded);
        })
        setUser(newUsers);
    }

    // Render
    return (
        <div>
            {users.map(users =>{
                return (
                    <div>
                        {users.id} {users.username}
                    </div>
                )
            })}

            <input name="username" value = {usernameInput} onChange = {e =>{
                setUsernameInput(e.target.value);
            }}placeholder="username"/>

            <button onClick={addUser}> Add users </button>
            <button onClick={remUser}> Remove users </button>

        </div>
    )
}

export default Test;