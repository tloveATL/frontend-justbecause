import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLoginFetch } from '../Actions/fetches'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.userLoginFetch(this.state)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>

            <label>Username</label>
            <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}
            /><br/>

            <label>Password</label>
            <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>

            <input type='submit'/>
        </form>
    )
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);