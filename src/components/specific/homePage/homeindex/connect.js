import { homeIndexAsyncNowAction,homeIndexAsyncPreAction } from '@actions/actionCreators'
export const mapStateToProps = (state) => (
    {
        homeNowGoods: state.homeReducer.homeNowGoods,
        homePreGoods: state.homeReducer.homePreGoods

    }
)
export const mapDispatchProps = (dispatch) => ({
    getList(page_key) {
        if(page_key){
            dispatch(homeIndexAsyncPreAction(page_key))
        }else{
            dispatch(homeIndexAsyncNowAction())
        }
        
    }

})

