export { default as RightMenu } from '../..\\components\\rightMenu\\rightMenu.vue'

export const LazyRightMenu = import('../..\\components\\rightMenu\\rightMenu.vue' /* webpackChunkName: "components_rightMenu/rightMenu" */).then(c => c.default || c)
