import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthDataAC } from '../../redux/auth-reducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
        .then(response =>{
            debugger
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthDataAC(id, email, login);
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({ login: state.auth.isAuth })

export default connect(mapStateToProps, { setAuthDataAC })(HeaderContainer);