import {storeAsyncAction,storedAsyncAction,handerZhAsyncAction} from '../../actions/actionCreator';
export const mapStateToProps = (state)=>({
    storeList:state.stores.storeList,
    storedList:state.stores.storedList,
    storedzhList:state.stores.storedzhList
})


export const mapDispatchToProps = (dispatch)=>({
    handleStoreGetData(ids){
        dispatch(storeAsyncAction(ids))
    },
    handleStoreGetDatad(ids){
        dispatch(storedAsyncAction(ids))
    },
    handerZhDatad(ids){
        dispatch(handerZhAsyncAction(ids))
    }
})