import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom' 
function Protected(props){
    const {Cmp}=props;
    let Navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){
            Navigate('/login')
        }
    },[Navigate]);
    return(
        <div>
            <Cmp/>
        </div>
    );
}
export default Protected;