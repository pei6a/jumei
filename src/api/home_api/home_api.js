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
// http://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
// http://s.mobile.jumei.com/api/v1/deal/dealactlist?
// card_id=4057&page=2&page_key=1566786480&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj
// http://s.mobile.jumei.com/api/v1/deal/dealactlist?card_id=4057&page=2&page_key=1566804240&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj

// 即将上新/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=pre&page_key=
// http://s.mobile.jumei.com/api/v1/deal/dealactlist?card_id=4057&page=2&page_key=1566816360&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj
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