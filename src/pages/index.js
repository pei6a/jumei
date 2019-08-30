import Loadable from 'react-loadable'
import Loading from '@common/loading'
const HomePage=Loadable({
    loader:()=>import('./home/homePage/index.js'),
    loading:Loading
})
const Gloup=Loadable({
    loader:()=>import('../pages/gloup'),
    loading:Loading
})
const Gwc=Loadable({
    loader:()=>import('../pages/gwc'),
    loading:Loading
})
const My=Loadable({
    loader:()=>import('./my'),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import('./login'),
    loading:Loading
})
const Detail=Loadable({
    loader:()=>import('./home/detail/index'),
    loading:Loading
})
const Shop=Loadable({
    loader:()=>import('./home/shop/index'),
    loading:Loading
})
const Search=Loadable({
    loader:()=>import('../components/specific/homePage/search/index'),
    loading:Loading
})
const Find=Loadable({
    loader:()=>import('../pages/category/find'),
    loading:Loading
})
const Seach=Loadable({
    loader:()=>import('../pages/category/findpage'),
    loading:Loading
})
const FindId=Loadable({
    loader:()=>import('../pages/category/findid'),
    loading:Loading
})
const Store=Loadable({
    loader:()=>import('../pages/store'),
    loading:Loading
})
const Items=Loadable({
    loader:()=>import('../pages/items'),
    loading:Loading
})
const Screen=Loadable({
    loader:()=>import('../pages/screen'),
    loading:Loading
})
export{
    HomePage,
    Gloup,
    Gwc,
    My,
    Login,
    Detail,
    Shop,
    Search,
    Find,
    Seach,
    FindId,
    Store,
    Items,
    Screen
}