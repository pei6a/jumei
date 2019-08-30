import {shopAllGoodsAsyncAction} from '@actions/actionCreators'
export const mapStateToProps=(state)=>({

})
export const mapDispatchToProps=(dispatch)=>({
    getFilterData(){
        dispatch(shopAllGoodsAsyncAction)
    }
})