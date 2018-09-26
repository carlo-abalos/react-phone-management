import React, { Component } from 'react';  
import {connect} from 'react-redux';
import phoneActions from '../actions/phones';

import {Header,Button,Segment,Dimmer,Loader,Message} from 'semantic-ui-react';


class Delete extends Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('mounting');

        this.props.onReadDeletePhone(this.props.selectedPhone);
    }

    render(){

        const MessageDeletePhone = ({deletePhoneMessage})=>{
            return(
              <div>
                {
                deletePhoneMessage &&
                    (deletePhoneMessage === 'success' ? 
                    <Message success header='Phone deleted' content="" />
                    :
                    <Message
                    error
                    header='Problem deleting phone'
                    content=''
                    />)
                }
              </div>
            )
          }

        return (
            <div className='DeleteContainer'>
                <h2>Delete Page</h2>
                
                <Segment >
                    <Dimmer active={this.props.isReadingDeletePhone || this.props.isDeletingPhone} inverted>
                        <Loader inverted>Fetching selected phone</Loader>
                    </Dimmer>

                    <Header as='h3'>Selected phone: {this.props.readDeletePhone ? this.props.readDeletePhone.name : ''}</Header>

                    <MessageDeletePhone deletePhoneMessage={this.props.deletePhoneMessage}></MessageDeletePhone>

                    <Button negative onClick={()=>this.props.onDeletePhone(this.props.selectedPhone)}>Delete phone</Button>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isReadingDeletePhone: state.phones.isReadingDeletePhone,
        selectedPhone: state.phones.selectedPhone,
        readDeletePhone: state.phones.readDeletePhone,
        isDeletingPhone: state.phones.isDeletingPhone,
        deletePhoneMessage: state.phones.deletePhoneMessage,
    }
}
  
const mapDispatchToProps = dispatch=>{
    return{
        onDeletePhone: (selectedPhone) => {
            dispatch(phoneActions.deletePhone(selectedPhone))
        },
        onReadDeletePhone: (selectedPhone) => {
            dispatch(phoneActions.readDeletePhone(selectedPhone))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);