
import types from './phoneTypes';
import axios from 'axios';

// function phoneCreated(phone){
//     return{
//         type: types.,
//         phone: phone
//     }
// }

function createPhone(phone) {
    return dispatch => {

        dispatch({
            type: types.CREATE_PHONE_REQUEST
        });

        axios.post('http://localhost:3000/phones', phone)
          .then(function (response) {
            console.log(response);

            setTimeout(() => {
                dispatch({
                    type: types.CREATE_PHONE_SUCCESS
                });
            }, 3000);

            })
          .catch(function (error) {
            console.log(error);

            setTimeout(() => {
                dispatch({
                    type: types.CREATE_PHONE_FAILURE
                });
            }, 3000);
          });

    };
  }


  function readPhone() {
    return dispatch => {

        dispatch({
            type: types.READ_PHONE_REQUEST
        });

        axios.get('http://localhost:3000/phones')
          .then(function (response) {
            console.log(response);

            setTimeout(() => {
                dispatch({
                    type: types.READ_PHONE_SUCCESS,
                    phones: response.data
                });
            }, 1000);

            })
          .catch(function (error) {
            console.log(error);

            setTimeout(() => {
                dispatch({
                    type: types.READ_PHONE_FAILURE
                });
            }, 1000);
          });

    };
  }

  function selectPhone(selectedPhone) {
    return dispatch => {

        dispatch({
            type: types.SELECT_PHONE,
            selectedPhone: selectedPhone
        });
    };
  }


  function readUpdatePhone(selectedPhone) {
    return dispatch => {

        dispatch({
            type: types.READ_UPDATE_PHONE_REQUEST
        });

        axios.get('http://localhost:3000/phones/' + selectedPhone)
          .then(function (response) {
            console.log(response);

            setTimeout(() => {
                dispatch({
                    type: types.READ_UPDATE_PHONE_SUCCESS,
                    readUpdatePhone: response.data
                });
            }, 1000);

            })
          .catch(function (error) {
            console.log(error);

            setTimeout(() => {
                dispatch({
                    type: types.READ_UPDATE_PHONE_FAILURE
                });
            }, 1000);
          });

    };
  }


  function updatePhone(selectedPhone,updatedPhone) {
    return dispatch => {

        dispatch({
            type: types.UPDATE_PHONE_REQUEST
        });

        axios.put('http://localhost:3000/phones', {
            selectedPhone: selectedPhone,
            updatedPhone: updatedPhone
        })
          .then(function (response) {
            console.log(response);

            setTimeout(() => {
                dispatch({
                    type: types.UPDATE_PHONE_SUCCESS,
                    selectedPhone: selectedPhone,   
                    updatedPhone: response.data
                });
            }, 1000);

            })
          .catch(function (error) {
            console.log(error);

            setTimeout(() => {
                dispatch({
                    type: types.UPDATE_PHONE_FAILURE
                });
            }, 1000);
          });

    };
  }


  function changeReadUpdatePhone(readUpdatePhone) {
    return dispatch => {    

        dispatch({
            type: types.CHANGE_READ_UPDATE_PHONE,
            readUpdatePhone: readUpdatePhone
        });
    };
  }


  function readDeletePhone(selectedPhone) {
    return dispatch => {

        dispatch({
            type: types.READ_DELETE_PHONE_REQUEST
        });

        axios.get('http://localhost:3000/phones/' + selectedPhone)
          .then(function (response) {
            console.log(response);

            setTimeout(() => {
                dispatch({
                    type: types.READ_DELETE_PHONE_SUCCESS,
                    readDeletePhone: response.data
                });
            }, 1000);

            })
          .catch(function (error) {
            console.log(error);

            setTimeout(() => {
                dispatch({
                    type: types.READ_DELETE_PHONE_FAILURE
                });
            }, 1000);
          });

    };
  }

  function deletePhone(selectedPhone) {
    return dispatch => {

        dispatch({
            type: types.DELETE_PHONE_REQUEST
        });

        axios.delete('http://localhost:3000/phones', {
            selectedPhone: selectedPhone
        })
          .then(function (response) {
            console.log(response);

            setTimeout(() => {
                dispatch({
                    type: types.DELETE_PHONE_SUCCESS,
                    selectedPhone: selectedPhone
                });
            }, 1000);

            })
          .catch(function (error) {
            console.log(error);

            setTimeout(() => {
                dispatch({
                    type: types.DELETE_PHONE_FAILURE
                });
            }, 1000);
          });

    };
  }


export default {
    createPhone, 
    readPhone, 
    selectPhone,
    readUpdatePhone,
    updatePhone,
    changeReadUpdatePhone,
    readDeletePhone,
    deletePhone
};