import {
        handlerJAction,
        handlerAAction,
        handlerSaveAction,
        handlerSelectAction,
        handlerInputAction,
        handlerUpdateAction,
        handlerDelAction
    } from '../../actions/actionCreator';
export const mapStateToProps = (state)=>({
    num:state.gwc.num,
    goods:state.gwc.goods,
    selectedAll:state.gwc.selectedAll,
    list:state.gloup.list
})


export const mapDispatchToProps = (dispatch)=>({
    handlerJ(index){
        dispatch(handlerJAction(index))
    },
    handlerA(index){
        dispatch(handlerAAction(index))
    },
    handlerSave(name,price,img){
        dispatch(handlerSaveAction(name,price,img))
    },
    handleSelectedChange(){
        dispatch(handlerSelectAction)
    },
    handlerInput(index){
        dispatch(handlerInputAction(index))
    },
    handlerUpdata(){
        dispatch(handlerUpdateAction)
        return true;
    },
    handlerDel(index){
        console.log(index)
        dispatch(handlerDelAction(index))
    }

})