import React,{useState} from 'react'
import './login.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Login() {
    const [click, setclick] = useState(true);
    const handleclick=()=>{
        setclick(!click);
    }
    const handlesignin=()=>{
        setclick(false)
    }

    return (
        <div className='login'>
            <div className={click?'container':'container onclick'}>
                <div className="left">
                    <div className="left-signup">
                        <h1>WELCOME TO CODE AND BOTS</h1>
                        <div className="image"></div>
                        <h3>LET STARTED</h3>
                    </div>
                    <div className="left-signin">
                        <h1>WELCOME BACK</h1>
                        <div className="image"></div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-signup">
                        <h1>CREATED AN ACCOUNT</h1>
                        <div className="form-panel">
                            <form action="submit"className='form'>
                                <input type="text" placeholder='EMAIL ADDRESS'/>
                                <input type="text" placeholder="PASSWORD"/>
                                <input type="text" placeholder="CONFIRM PASSWORD"/>
                                <button class="btn">sign up</button>
                                <h4><span>OR</span></h4>
                                <div className="icons">
                                    <div className='icon'>
                                        <FacebookIcon/>
                                    </div>
                                    <div className='icon'>
                                        <TwitterIcon/>
                                    </div>
                                </div>
                                <p onClick={handlesignin}>already have a account?</p>
                                <h3 onClick={handleclick}>SIGN IN</h3>
                            </form>
                        </div>
                    </div>
                    <div className="right-signin">
                        <h1>LOGIN YOUR ACCOUNT</h1>
                        <div className="form-panel">
                            <form action="submit"className='form'>
                                <input type="text" placeholder='EMAIL ADDRESS'/>
                                <input type="text" placeholder="PASSWORD"/>
                                <h5 className='formpara'>FORGET PASSWORD?</h5>
                                <button class="btn">sign up</button>
                                <h4><span>OR</span></h4>
                                <div className="icons">
                                    <div className='icon'>
                                        <FacebookIcon/>
                                    </div>
                                    <div className='icon'>
                                        <TwitterIcon/>
                                    </div>
                                </div>
                                <p >already have a account?</p>
                                <h3 onClick={handleclick}>SIGN UP</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
