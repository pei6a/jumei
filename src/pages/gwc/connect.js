import {selectedAction, gwcAsyncAction} from '../../actions/actionCreator'
export const mapStateToProps = (state)=>({
    selectedAll:state.gwc.selectedAll
})


export const mapDispatchToProps = (dispatch)=>({
    handlerClick(){
        dispatch(selectedAction)
    }

})