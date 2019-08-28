import Loadable from 'react-loadable';
import Loading from "@common/loading"
const Seach = Loadable({
    loader:()=>import("../pages/category/findpage"),
    loading:Loading
})
const FindId = Loadable({
    loader:()=>import("../pages/category/findid"),
    loading:Loading
})
export {
    Seach,
    FindId
}