/* eslint-disable no-console */

interface Data {
  [key: string | symbol]: number | undefined
  price: number
  quantity: number
  total: number | undefined
}

let data: Data = {
  price: 5,
  quantity: 2,
  total: undefined,
}

let target: Function | undefined
// Our simple Dep class
class Dep {
  subscribers: Function[]
  constructor() {
    this.subscribers = []
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      // Only if there is a target & it's not already subscribed
      this.subscribers.push(target)
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub())
  }
}

const deps = new Map()

// Go through each of our data properties
Object.keys(data).forEach((key) => {
  deps.set(key, new Dep())
})

const data_without_proxy = data

data = new Proxy(data_without_proxy, {
  get(obj, key): any {
    deps.get(key).depend()
    return obj[key]
  },
  set(obj, key, value) {
    obj[key] = value
    deps.get(key).notify()
    return true
  },
})

// The code to watch to listen for reactive properties
function watcher(myFunc: Function | undefined) {
  target = myFunc
  if (target)
    target()
  target = undefined
}

watcher(() => {
  data.total = data.price * data.quantity
})

console.log(`total = ${data.total}`)
data.price = 20
console.log(`total = ${data.total}`)
data.quantity = 10
console.log(`total = ${data.total}`)
