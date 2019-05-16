import React from 'react';
import {login} from '../actions';
import {connect} from 'react-redux';

import { Redirect } from 'react-router-dom';

class Login extends React.Component{
        state = {
            username: '',
            password: '',
        }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault()
        // console.log("firing")
        this.props.login(this.state).then(() => {
            return <Redirect to="/friendslist" />
        })
    }

    render() {
        return (
            <div>
                {this.props.loggingIn ? (<div><span>Logging In...</span></div>):
                    (<div>
                        <p>LOGIN</p>
                        <form>
                            <label></label>
                            <input onChange={this.handleChange} type='text' name='username' value={this.state.username} placeholder='Username'></input>
                            <input onChange={this.handleChange} type='password' name='password' value={this.state.password} placeholder='Password'></input>
                            <button onClick={this.handleLogin}>Log In</button>
                        </form>
                    </div>
                    )
                }
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     ...state
// })
const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
})

export default connect(
    mapStateToProps,
    {login}
)(Login)