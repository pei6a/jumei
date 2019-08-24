import Loadable from "react-loadable"
import Loading from "@common/loading"
const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
export {
    Home
}