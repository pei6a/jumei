import http from "@utils/http";
export const souMsapi=()=>http.get("/msapi/mall/allcategories.json");
// export const gloupApi=()=>http.get("/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20");

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