import {itemsAsyncAction,gwcAsyncAction} from '../../actions/actionCreator';
export const mapStateToProps = (state)=>({
    itemsList:state.gloup.itemsList,
    list:state.gloup.list,
    imgs:state.gloup.imgs,
    info:state.gloup.info,
    buy:state.gloup.buy
})


export const mapDispatchToProps = (dispatch)=>({
    handleGetItems(id,type){
        dispatch(itemsAsyncAction(id,type))
    },
    handlerToGwc(name,price,img){
        this.props.history.push({pathname:"/gwc/"+name+"/"+price+"/"+img})
    }
})