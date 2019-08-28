import Loadable from "react-loadable"
import Loading from "@common/loading"
const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
const Gloup=Loadable({
    loader:()=>import("./gloup"),
    loading:Loading
})
const Items=Loadable({
    loader:()=>import("./items"),
    loading:Loading
})
const Gwc=Loadable({
    loader:()=>import("./gwc"),
    loading:Loading
})
const Store=Loadable({
    loader:()=>import("./store"),
    loading:Loading
})
export {
    Home,
    Gloup,
    Items,
    Gwc,
    Store
}