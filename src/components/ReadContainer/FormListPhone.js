import React from 'react'

import { List, Radio,Dimmer,Loader,Segment } from 'semantic-ui-react'

import './FormListPhone.css';
    
const FormListPhone = ({phones, isReadingPhone,selectedPhone, onSelectPhone}) => (
    <Segment id='form_listphone'>
        <Dimmer active={isReadingPhone} inverted>
            <Loader inverted>Fetching list of phones</Loader>
        </Dimmer>
        <List>
            {phones.map((phone, i) => {
                return(
                <List.Item key={i}>
                    <Radio 
                        key={i} 
                        value={i} 
                        label={phone.name} 
                        name='phone' 
                        onChange={(event, {value})=>{
                            onSelectPhone(value)
                        }}
                        checked={selectedPhone === i}/>
                </List.Item>
                )
            })}
            {/* <List.Item><Radio label='Apples' name='phone'/></List.Item>
            <List.Item><Radio label='Apples' name='phone'/></List.Item> */}
        </List>
    </Segment>
)

export default FormListPhone