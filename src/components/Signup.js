import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userPostFetch } from '../Actions/fetches'

export class Signup extends Component {
    state = {
        username: "",
        password: "",
        bio: "",
        img_url: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.userPostFetch(this.state)
    }
    
    
        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <h1>Register For An Account</h1>
        
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
        
                <label>Profile Image</label>
                <input
                    name='img_url'
                    placeholder='Profile Image (URL)'
                    value={this.state.avatar}
                    onChange={this.handleChange}
                    /><br/>
        
                <label>Bio</label>
                <textarea
                    name='bio'
                    placeholder='Bio'
                    value={this.state.bio}
                    onChange={this.handleChange}
                    /><br/>
        
                <input type='submit'/>
            </form>
            )
        }
        }
        
        const mapDispatchToProps = (dispatch) => ({
        userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
        })
        
        export default connect(null, mapDispatchToProps)(Signup);
