import React, { Component } from 'react';  
import {connect} from 'react-redux';
import phoneActions from '../actions/phones'

import FormUpdatePhone from '../components/UpdateContainer/FormUpdatePhone';

class Update extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('mounting');

        this.props.onReadUpdatePhone(this.props.selectedPhone);
    }

    render() {

        return (
            <div className='UpdateContainer'>
                <h2>Update Page</h2>
                <FormUpdatePhone 
                    onUpdatePhone={this.props.onUpdatePhone}
                    isUpdatingPhone={this.props.isUpdatingPhone}
                    updatePhoneMessage={this.props.updatePhoneMessage}
                    isReadingUpdatePhone={this.props.isReadingUpdatePhone}
                    readUpdatePhone={this.props.readUpdatePhone}
                    onChangeReadUpdatePhone={this.props.onChangeReadUpdatePhone}
                    selectedPhone={this.props.selectedPhone}>
                </FormUpdatePhone>
            </div>
        )

    }
}

const mapStateToProps = state =>{
    return{
        isUpdatingPhone: state.phones.isUpdatingPhone,
        updatePhoneMessage: state.phones.updatePhoneMessage,
        isReadingUpdatePhone: state.phones.isReadingUpdatePhone,
        selectedPhone: state.phones.selectedPhone,
        readUpdatePhone: state.phones.readUpdatePhone
    }
}
  
const mapDispatchToProps = dispatch=>{
    return{
        onUpdatePhone: (selectedPhone,updatedPhone) => {
            dispatch(phoneActions.updatePhone(selectedPhone,updatedPhone))
        },
        onReadUpdatePhone: (selectedPhone) => {
            dispatch(phoneActions.readUpdatePhone(selectedPhone))
        },
        onChangeReadUpdatePhone: (readUpdatePhone) => {
            dispatch(phoneActions.changeReadUpdatePhone(readUpdatePhone))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);