import React, { Component } from 'react';  
import {connect} from 'react-redux';
import phoneActions from '../actions/phones'

import FormCreatePhone from '../components/CreateContainer/FormCreatePhone';

class Create extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className='CreateContainer'>
                <h2>Create Page</h2>
                <FormCreatePhone 
                    onCreatePhone={this.props.onCreatePhone}
                    isCreatingPhone={this.props.isCreatingPhone}
                    createPhoneMessage={this.props.createPhoneMessage}>
                </FormCreatePhone>
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return{
        isCreatingPhone: state.phones.isCreatingPhone,
        createPhoneMessage: state.phones.createPhoneMessage
    }
}
  
const mapDispatchToProps = dispatch=>{
    return{
        onCreatePhone: (phone) => {
            dispatch(phoneActions.createPhone(phone))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);