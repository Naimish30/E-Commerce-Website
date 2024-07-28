import { useState, useEffect } from "react"

import { Navigate, useNavigate } from "react-router-dom"
import Headers from "./Headers"
import axios from "axios"


function Login() {
  const [data, setData] = useState([])
  const [userInput, setUser] = useState('')
  const [passInput, setPass] = useState('')
  const [valid, setValid] = useState(0)

  const navigate = useNavigate()

  const Check = async () => {
    try {
      const result = await axios.get("https://shoppinone.000webhostapp.com/user_info_check.php");
      const userData = result.data.details.find((user) => user.Username === userInput);

      if (userData) {
        if (userData.Pass !== passInput) {
          alert("Invalid Password");
        } else {
          setValid(1);
          alert("Login successful");
          localStorage.setItem('login', userInput);
        }
      } else {
        alert("Invalid User");
      }
    } catch (error) {
      console.error("Error fetching data:", error);

    }
  };

  const handleLogin = () => {
    Check();
  };

  useEffect(() => {
    if (valid === 1) {
      navigate('/');
    }
  }, [valid]);


  return (
    <>
      <Headers />
      <div className="login-container">
        <h1 className="heading-text">Login</h1>

        <input type="text" placeholder="Email or Username" className="input-text" onChange={(e) => setUser(e.target.value)}></input><br /><br />
        <input type="password" placeholder="Enter your password" className="input-text" onChange={(e) => setPass(e.target.value)}></input><br></br>
        <input type="checkbox" className="remember" /><span >Remember Me</span><br />
        <span className="forget-text">Forget Password?</span><br />
        <button type="submit"  className='px-5 py-2 text-sm rounded-full text-white   bg-red-600 hover:bg-red-700' onClick={handleLogin}>Login</button>


      </div>
    </>
  )
}
export default Login;