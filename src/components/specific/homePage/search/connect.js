import {homeSearchAsyncPreAction} from '@actions/actionCreators'
export const mapStateToProps=(state)=>({
    searchResult:state.searchReducer.searchResult
})
export const mapDispatchToProps=(dispatch)=>({
    searchBackHandler() {
        this.props.history.goBack()
    },

    getSearchResult(keyword){
        dispatch(homeSearchAsyncPreAction(keyword))
    }
})