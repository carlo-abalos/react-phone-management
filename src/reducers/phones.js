
import types from '../actions/phoneTypes';


const initialState = {
    phones: [],
    isCreatingPhone: false,
    createPhoneMessage: null,
    isReadingPhone: true,
    selectedPhone: null,
    isReadingUpdatePhone: false,
    readUpdatePhone: null,
    isUpdatingPhone: false,
    updatePhoneMessage: null,
    readDeletePhone: null,
    isReadingDeletePhone: false,
    isDeletingPhone: false,
    deletePhoneMessage: null
}



function phonesReducer(state, action){
    if(typeof state === 'undefined'){
        return Object.assign({}, initialState);
    }

    switch(action.type){
        case types.CREATE_PHONE_REQUEST:
            return Object.assign({},state,{
                isCreatingPhone: true
            })
        case types.CREATE_PHONE_SUCCESS:
            return Object.assign({},state,{
                isCreatingPhone: false,
                createPhoneMessage: 'success'
            })
        case types.CREATE_PHONE_FAILURE:
            return Object.assign({},state,{
                isCreatingPhone: false,
                createPhoneMessage: 'error'
            })

        case types.READ_PHONE_REQUEST:
            return Object.assign({},state,{
                isReadingPhone: true
            })
        case types.READ_PHONE_SUCCESS:
            return Object.assign({},state,{
                isReadingPhone: false,
                phones: action.phones
            })
        case types.READ_PHONE_FAILURE:
            return Object.assign({},state,{
                isReadingPhone: false,
            })

        case types.SELECT_PHONE:
            return Object.assign({},state,{
                selectedPhone: action.selectedPhone,
            })

        case types.READ_UPDATE_PHONE_REQUEST:
            return Object.assign({},state,{
                isReadingUpdatePhone: true
            })
        case types.READ_UPDATE_PHONE_SUCCESS:
            return Object.assign({},state,{
                isReadingUpdatePhone: false,
                readUpdatePhone: action.readUpdatePhone
            })
        case types.READ_UPDATE_PHONE_FAILURE:
            return Object.assign({},state,{
                isReadingUpdatePhone: false,
            })

        case types.UPDATE_PHONE_REQUEST:
            return Object.assign({},state,{
                isUpdatingPhone: true
            })
        case types.UPDATE_PHONE_SUCCESS:
            return Object.assign({},state,{
                isUpdatingPhone: false,
                updatePhoneMessage: 'success'
            })
        case types.UPDATE_PHONE_FAILURE:
            return Object.assign({},state,{
                isUpdatingPhone: false,
                updatePhoneMessage: 'error'
            })

        case types.CHANGE_READ_UPDATE_PHONE:
            return Object.assign({},state,{
                readUpdatePhone: action.readUpdatePhone,
            })

        case types.READ_DELETE_PHONE_REQUEST:
            return Object.assign({},state,{
                isReadingDeletePhone: true
            })
        case types.READ_DELETE_PHONE_SUCCESS:
            return Object.assign({},state,{
                isReadingDeletePhone: false,
                readDeletePhone: action.readDeletePhone
            })
        case types.READ_DELETE_PHONE_FAILURE:
            return Object.assign({},state,{
                isReadingDeletePhone: false,
            })


        case types.DELETE_PHONE_REQUEST:
            return Object.assign({},state,{
                isDeletingPhone: true
            })
        case types.DELETE_PHONE_SUCCESS:
            return Object.assign({},state,{
                isDeletingPhone: false,
                deletePhoneMessage: 'success'
            })
        case types.DELETE_PHONE_FAILURE:
            return Object.assign({},state,{
                isDeletingPhone: false,
                deletePhoneMessage: 'error'
            })
        default:
            return state;
    }
}


export default phonesReducer;