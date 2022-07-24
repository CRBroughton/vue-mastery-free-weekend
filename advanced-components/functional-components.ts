import Vue, { h } from 'vue'

export function render() {
  Vue.defineComponent({
    setup(_, { slots }) {
      return () => h('h1', slots.default)
    },
  })
}
