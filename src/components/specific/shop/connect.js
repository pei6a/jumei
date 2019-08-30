import { shopAllGoodsAsyncAction } from '@actions/actionCreators'
export const mapStateToProps = (state) => ({
    shopAllResult: state.shopReducer.shopAllResult
})
export const mapDispatchProps = (dispatch) => ({
    getAllGoods(goods,page) {
        dispatch(shopAllGoodsAsyncAction(goods,page))
    },


})