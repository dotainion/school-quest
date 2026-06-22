import { useNavigate } from "react-router-dom"

export const Header = () =>{
    const navigate = useNavigate();
    return(
        <header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh_K9qE7U0kOz-KVD3D43jiB5HMiVgN5DHoITwYb_HhnlBH42je6B0wqpLHQm11eOxD-KRD9j4wTZwOWWNy8LLsNaV4GMslxFaNzoJWY&s=10" alt="Hello world" />
            <a onClick={()=>navigate("/home")}>Home</a>
            <a onClick={()=>navigate('/about/us')}>About us</a>
            <a onClick={()=>navigate('/register')} className="btn btn-warning">Register</a>
        </header>
    )
}