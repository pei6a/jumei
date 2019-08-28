import http from "@utils/http"
// souMsapi
export const souMsapi=()=>http.get("/msapi/mall/allcategories.json")

export const souMsapixuan=(category_id=62,page=1,ajax="get")=>http.get("/search/index?",
{category_id:category_id,page:page,ajax:ajax})

export const souMsapiId=(item_id="351998",type="global_mall")=>http.get("/product/ajaxStaticDetail?",{item_id:item_id,type:type})


