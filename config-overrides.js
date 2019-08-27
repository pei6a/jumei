const {override,addWebpackAlias,fixBabelImports }=require('customize-cra')
const path=require('path')
module.exports=override(
    addWebpackAlias({
        ['@']:path.resolve(__dirname,'./src'),
        ['@common']:path.resolve(__dirname,'./src/common'),
        ['@components']:path.resolve(__dirname,'./src/components'),
        ['@layout']:path.resolve(__dirname,'./src/layout'),
        ['@utils']:path.resolve(__dirname,'./src/utils'),
        ['@store']:path.resolve(__dirname,'./src/store'),
        ['@static']:path.resolve(__dirname,'./src/static'),
        ['@router']:path.resolve(__dirname,'./src/router'),
        ['@pages']:path.resolve(__dirname,'./src/pages'),
        ['@lib']:path.resolve(__dirname,'./src/lib'),
        ['@api']:path.resolve(__dirname,'./src/api'),
        ['@actions']:path.resolve(__dirname,'./src/actions')
    }),
   fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
       })
)
