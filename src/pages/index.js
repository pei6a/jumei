import Loadable from 'react-loadable'
import Loading from '@common/loading'
const HomePage=Loadable({
    loader:()=>import('./home/homePage/index.js'),
    loading:Loading
})
const Tuan=Loadable({
    loader:()=>import('./tuan/index'),
    loading:Loading
})
const Cart=Loadable({
    loader:()=>import('./cart/index.js'),
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
export{
    HomePage,
    Tuan,
    Cart,
    My,
    Login,
    Detail,
    Shop,
    Search,
    Find,
    Seach,
    FindId
}