import { detailAsyncPreAction } from '../../../../actions/actionCreators'
export const mapStateToProps = (state) => (
    {
        detailResult: state.detailReducer.detailResult
    }
)
export const mapDispatchProps = (dispatch) => ({
getDetail(item_id,type){
    dispatch(detailAsyncPreAction(item_id,type))
}
})

