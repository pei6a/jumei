const proxy=require("http-proxy-middleware")
module.exports=(app)=>{
    // 搜索
    app.use(proxy("/msapi",{
        target:"http://mobile.jumei.com",
        changeOrigin:true
    }))
}
