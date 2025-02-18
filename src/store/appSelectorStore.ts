import {create} from "zustand"
import {persist} from "zustand/middleware";
import {appSelectorStoreType} from "../models/store_models/store.dt";




export const useAppSelectorStore = create<appSelectorStoreType>()(
    persist((set) => ({}), {name: "app-selector-store"})
)