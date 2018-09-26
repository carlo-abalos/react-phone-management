import React from 'react'
import { Button, Checkbox, Form,Message } from 'semantic-ui-react'

import './FormCreatePhone.css';


const MessageCreatePhone = ({createPhoneMessage})=>{
  return(
    <div>
      {createPhoneMessage === 'success' ? 
      <Message success header='Phone created' content="" />
      :
      <Message
        error
        header='Problem creating phone'
        content=''
      />
      }
    </div>
  )
}

const FormCreatePhone = ({onCreatePhone, isCreatingPhone, createPhoneMessage}) => (
  <Form id='form_createphone' onSubmit={(event)=>{
    event.preventDefault();
    
    const elements = event.target.elements;

    onCreatePhone({
      name: elements.name.value,
      screen: elements.screen.value,
      battery: elements.battery.value
    })
  }} loading={isCreatingPhone} 
    success={createPhoneMessage === 'success' ? true: false }
    error={createPhoneMessage === 'error' ? true: false }>
    <Form.Field>
      <label>Name</label>
      <input name='name'/>
    </Form.Field>
    <Form.Field>
      <label>Screen</label>
      <input name='screen'/>
    </Form.Field>
    <Form.Field>
      <label>Battery</label>
      <input name='battery'/>
    </Form.Field>

    <MessageCreatePhone createPhoneMessage={createPhoneMessage}></MessageCreatePhone>

    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormCreatePhone