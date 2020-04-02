import  React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component{
    LogOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render(){
        const loginRegLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/register' className='nav-link'>
                        Register
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/" className="nav-link">
                        Log-In
                    </Link>
                 </li>
            </ul>
        )

        const userLink=(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className='nav-link'>
                        <a href="" onClick={this.LogOut.bind(this)} >
                            LogOut
                        </a>
                    </Link>
                </li>
            </ul>
        )

        return(
            <nav className="navbar navbar-expand-lg navbar-light ">
                <img src="public\favicon.png" alt=""/>
                <a className="navbar-brand" href="/">Mind-Browser</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id='navbar1'>
                    <ul className="navbar-nav mr-auto">
                        
                    </ul>
                    {localStorage.usertoken ? userLink :loginRegLink}
                </div>
            </nav>
        )

    }
}

export default withRouter(Navbar)