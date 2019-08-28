const proxy=require("http-proxy-middleware")
module.exports=(app)=>{
    // 搜索
    app.use(proxy("/msapi",{
        target:"http://mobile.jumei.com",
        changeOrigin:true
    }))
    // 筛选
    app.use(proxy("/search",{
        target:"http://m.jumei.com",
        changeOrigin:true
    }))
     // 详情
    app.use(proxy("/product",{
        target:"http://h5.jumei.com",
        changeOrigin:true
    }))
}
