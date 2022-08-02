import React, {useState} from "react";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: ''
    // })

    // function handleSubmit(e){
    //     e.preventDefault()
    //     setFormData({
    //         email: email,
    //         password: password
    //     })
    // }
    // console.log(formData)
    return(
        <form  className="Top-sign-in">
            {/* onSubmit={handleSubmit} */}
            <label>     
                <input 
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            </label>
            <br/>
            <label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
            </label>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login