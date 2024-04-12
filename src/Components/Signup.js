import { useState } from "react"
import Headers from "./Headers";
import axios from "axios";
function Signup() {
    const [userInput, setUser] = useState("");
    const [passInput, setPass] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");

    function store(e) {
        e.preventDefault();

        if (userInput.length === 0) {
            alert('User Input cannot be null');
        }
        else if (passInput.length === 0) {
            alert('Password cannot be null');
        }

        else if (fname.length === 0) {
            alert('First Name cannot be null');
        }

        else if (lname.length === 0) {
            alert('Last Name cannot be null');
        }
        else {

            const url = "https://shoppinone.000webhostapp.com/shopping_data.php";
            let fdata = new FormData();
            fdata.append('firstname', fname);
            fdata.append('lastname', lname);
            fdata.append('Userid', userInput);
            fdata.append('Password', passInput);

            axios.post(url, fdata).then(response => alert(response.data)).catch(error => alert(error));
        }

    }

    // function store(e){
    //     let d={fname,lname,userInput,passInput}
    //     alert(d.fname)
    //     fetch("http://localhost:3000/users",{
    //         method:'POST',
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(d)
    //     }).then((result) => {
    //       result.json().then((resp) => {
    //         alert("result", resp)
    //       })
    //     })
    //     e.preventDefault()
    // }
    return (
        <>
            <Headers />
            <div className="Register-container">
                <h1 className="heading-text">Register</h1>

                <input type="text" placeholder="First Name" name='fname' className="input-text" onChange={(e) => { setfname(e.target.value) }}></input><br /><br />
                <input type="text" placeholder="Last Name" name="lname" className="input-text" onChange={(e) => { setlname(e.target.value) }}></input><br /><br />
                <input type="text" placeholder="Email or Username" name="userid" className="input-text" onChange={(e) => { setUser(e.target.value) }}></input><br /><br />
                <input type="password" placeholder="Enter your password" name="password" className="input-text" onChange={(e) => { setPass(e.target.value) }}></input><br></br>
                <button type="submit" className="login-btn" onClick={store}>Register</button>


            </div>
        </>
    )
}
export default Signup;