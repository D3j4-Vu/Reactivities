import { createContext, useContext } from "react"
import ActiviyStore from "./activityStore"
import CommonStore from "./commonStore";

interface Store {
    activityStore: ActiviyStore
    commonStore: CommonStore
}

export const store: Store = {
    activityStore: new ActiviyStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore (){
    return useContext(StoreContext);
}
