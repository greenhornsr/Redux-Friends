import React from 'react';
import {login} from '../actions';
import {connect} from 'react-redux';

class Login extends React.Component{

    handleLogin = (event) => {
        event.preventDefault()
        // console.log("firing")
        this.props.login()
    }

    render() {
        return (
            <div>
                {this.props.loggingIn ? (<div><span>Logging In...</span></div>):
                    (<div>
                        <p>LOGIN</p>
                        <form>
                            <label></label>
                            <input placeholder='Username'></input>
                            <input placeholder='Password'></input>
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