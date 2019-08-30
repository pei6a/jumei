import http from "@utils/http"
// souMsapi
export const souMsapi=()=>http.get("/msapi/mall/allcategories.json")

export const souMsapixuan=(category_id=62,page=1,ajax="get")=>http.get("/search/index?",
{category_id:category_id,page:page,ajax:ajax})

export const souMsapiId=(item_id="351998",type="global_mall")=>http.get("/product/ajaxStaticDetail?",{item_id:item_id,type:type})

export const dianpu=(sort="",category_id="",price_range="",function_id="",series_id="",is_sellable="",timestamp=1566995546688,locateDM=0,show_comment=0,is_filter_coutuan=0)=>http.get("/pop/ajaxGetAllProduct?merchant_id=&search_type=15&brand_id=&store_id=4296&page=1&",{
    sort:sort,category_id:category_id,price_range:price_range,function_id:function_id,series_id:series_id,is_sellable:is_sellable,timestamp:timestamp,locateDM:locateDM,show_comment:show_comment,is_filter_coutuan:is_filter_coutuan
})




export const gloupApi=(page=1,per_page=20)=>http.get("/yiqituan/tab_list?tab=coutuan_home&",{page,per_page});

export const gloupApim=()=>http.get("/yiqituan/tab_list?tab=coutuan_baby&page=1&per_page=20");
export const gloupApimz=()=>http.get("/yiqituan/tab_list?tab=coutuan_makeup&page=1&per_page=20");
export const gloupApixb=()=>http.get("/yiqituan/tab_list?tab=coutuan_bag&page=1&per_page=20");
export const gloupApisp=()=>http.get("/yiqituan/tab_list?tab=coutuan_jewellery&page=1&per_page=20");
export const gloupApism=()=>http.get("/yiqituan/tab_list?tab=coutuan_3c&page=1&per_page=20");
export const gloupApijju=()=>http.get("/yiqituan/tab_list?tab=coutuan_furniture&page=1&per_page=20");
export const gloupApinz=()=>http.get('/yiqituan/tab_list?tab=coutuan_ladies&page=1&per_page=20');
export const gloupApibj=()=>http.get("/yiqituan/tab_list?tab=coutuan_food&page=1&per_page=20");
export const gloupApiny=()=>http.get("/yiqituan/tab_list?tab=coutuan_underwear&page=1&per_page=20");
export const gloupApixl=()=>http.get("/yiqituan/tab_list?tab=coutuan_shose&page=1&per_page=20");
export const gloupApihw=()=>http.get("/yiqituan/tab_list?tab=coutuan_sports&page=1&per_page=20");
export const gloupApixq=()=>http.get("/yiqituan/tab_list?tab=coutuan_pre&page=1&per_page=20");

export const gloupApiItems=(item_id,type)=>http.get("/yiqituan/ajaxDetail?",{
    item_id,
    type
})
