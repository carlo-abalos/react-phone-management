import React from 'react'
import { Button, Checkbox, Form,Message } from 'semantic-ui-react'


const MessageUpdatePhone = ({updatePhoneMessage})=>{
  return(
    <div>
      {updatePhoneMessage === 'success' ? 
      <Message success header='Phone updated' content="" />
      :
      <Message
        error
        header='Problem updating phone'
        content=''
      />
      }
    </div>
  )
}

const FormUpdatePhone = ({onUpdatePhone,selectedPhone, isUpdatingPhone, updatePhoneMessage,isReadingUpdatePhone,readUpdatePhone,onChangeReadUpdatePhone}) => (
  <Form id='form_updatephone' onSubmit={(event)=>{
    event.preventDefault();
    
    const elements = event.target.elements;

    onUpdatePhone(selectedPhone,{
      name: elements.name.value,
      screen: elements.screen.value,
      battery: elements.battery.value
    })
  }} loading={isReadingUpdatePhone || isUpdatingPhone} 
    success={updatePhoneMessage === 'success' }
    error={updatePhoneMessage === 'error' }>
    <Form.Field>
      <label>Name</label>
      <input name='name' value={readUpdatePhone ? readUpdatePhone.name : ''} 
      onChange={(event)=>{
        onChangeReadUpdatePhone(
          Object.assign({},readUpdatePhone,{
            name: event.target.value,
          })
        )
      }}/>
    </Form.Field>
    <Form.Field>
      <label>Screen</label>
      <input name='screen' value={readUpdatePhone ? readUpdatePhone.screen : ''}
      onChange={(event)=>{
        onChangeReadUpdatePhone(
          Object.assign({},readUpdatePhone,{
            screen: event.target.value,
          })
        )
      }}/>
    </Form.Field>
    <Form.Field>
      <label>Battery</label>
      <input name='battery' value={readUpdatePhone ? readUpdatePhone.battery : ''}
      onChange={(event)=>{
        onChangeReadUpdatePhone(
          Object.assign({},readUpdatePhone,{
            battery: event.target.value,
          })
        )
      }}/>
    </Form.Field>

    <MessageUpdatePhone updatePhoneMessage={updatePhoneMessage}></MessageUpdatePhone>

    <Button type='submit'>Update</Button>
  </Form>
)

export default FormUpdatePhone