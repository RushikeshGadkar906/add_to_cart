import React,{useState} from 'react';

const BasicForm = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [allEntry,setAllEntry] = useState([]);

const submitForm = (e) =>{
    e.preventDefault();
    if(email && password){
        const newEntry = {email:email,password:password}
    setAllEntry([...allEntry, newEntry])
    setEmail("");
    setPassword("");
    }else{
        alert("plz fill first")
    }
}
    
  return (
    <>
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>

        <div>
            {
                allEntry.map((curr,i)=>{
                    const {email,assword} = curr;
                    return(
                        <div key={i}>
                            <p>{i+1}</p>
                            <h1>{email}</h1>
                            <p>{password}</p>
                        </div> 
                    
                    )
                })
            }
        </div>
    </>
  )
}

export default BasicForm