import React, { Component } from 'react';  
import {connect} from 'react-redux';
import phoneActions from '../actions/phones'

import FormListPhone from '../components/ReadContainer/FormListPhone';

class Read extends Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('mounting');

        this.props.onReadPhone();
    }

    render(){
        //alert(this.props.phones);
        return (
            <div className='ReadContainer'>
                <h2>Read Page</h2>
                <FormListPhone 
                    phones={this.props.phones}
                    isReadingPhone={this.props.isReadingPhone}
                    selectedPhone={this.props.selectedPhone}
                    onSelectPhone={this.props.onSelectPhone}>
                </FormListPhone>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isReadingPhone: state.phones.isReadingPhone,
        phones: state.phones.phones,
        selectedPhone: state.phones.selectedPhone
    }
}
  
const mapDispatchToProps = dispatch=>{
    return{
        onReadPhone: () => {
            dispatch(phoneActions.readPhone())
        },
        onSelectPhone: (selectedPhone) => {
            dispatch(phoneActions.selectPhone(selectedPhone))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Read);