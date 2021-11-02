import React from "react"
import { observable, action, makeObservable } from "mobx"

class Store {
  count = 0

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action.bound,
    })
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}

const store = new Store()

export const StoreContext = React.createContext(store)
export const useStoreContext = () => React.useContext(StoreContext)
