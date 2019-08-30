import http from '@utils/http'
// 十点上新+即将上新
export const HomePageListApi = (
    page_key = '1566896640',
    card_id = 4057,
    page = 2,
    platform = 'wap',
    client_v = '1.0',
    user_tag_id = 0,
    source = 'touch',
    site = 'bj'
) => http.get('/api/v1/deal/dealactlist?', {
    page_key, card_id, page, platform, client_v, user_tag_id, source, site
}
)
export const HomePagePreApi = (
    page_key = '1566818760',
    card_id = 4057,
    page = 5,
    platform = 'wap',
    client_v = '1.0',
    user_tag_id = 0,
    source = 'touch',
    site = 'bj'
) => http.get('/api/v1/deal/dealactlist?', {
    page_key, card_id, page, platform, client_v, user_tag_id, source, site
}
)

// 母婴
export const MuandbabyApi = (
    page = 1,
    card_id = 7430,
) => http.get('/rewrite/muandbaby/ajaxList?', {
    page, card_id
}
)


// 搜索
export const searchApi = (
    keyword = 'be'
) => http.get('/msapi/search/suggestion.json?', {
    keyword,
    url: 'http://mobile.jumei.com/msapi/search/suggestion.json'
})

// detailPage
export const detailApi = (
    item_id = 'df1810308491774p4581634',
    type = 'jumei_pop'
) => http.get('/rewrite/product/ajaxStaticDetail?', {
    item_id,
    type
})
export const detailDynamicApi = (
    item_id = 'df1810308491774p4581634',
    type = 'jumei_pop'
) => http.get('/rewrite/product/ajaxDynamicDetail?', {
    item_id,
    type
})


// http://h5.jumei.com/s/store/5172.html?fp=goods_detail&fpa=navigation
// 店铺
export const shopAllGoodsApi=(
    page= 1,
    merchant_id='',
    search_type=14,
    brand_id= '',
    store_id= 5172,
    
    sort= '',
    category_id='', 
    price_range= '',
    function_id= '',
    series_id= '',
    is_sellable= '',
    timestamp='1566959438805',
    locateDM= 0,
    show_comment= 0,
    is_filter_coutuan= 0
)=>http.get('/rewrite/pop/ajaxGetAllProduct?',{
    page,
    merchant_id,
    search_type,
    brand_id,
    store_id,

    sort,
    category_id, 
    price_range,
    function_id,
    series_id,
    is_sellable,
    timestamp,
    locateDM,
    show_comment,
    is_filter_coutuan
})