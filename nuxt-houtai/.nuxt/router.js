import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66c2f2e8 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _446866cc = () => interopDefault(import('..\\pages\\Home\\index.vue' /* webpackChunkName: "pages/Home/index" */))
const _1ea3063b = () => interopDefault(import('..\\pages\\Home\\options1.vue' /* webpackChunkName: "pages/Home/options1" */))
const _1eb11dbc = () => interopDefault(import('..\\pages\\Home\\options2.vue' /* webpackChunkName: "pages/Home/options2" */))
const _1ebf353d = () => interopDefault(import('..\\pages\\Home\\options3.vue' /* webpackChunkName: "pages/Home/options3" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Home",
    component: _66c2f2e8,
    children: [{
      path: "",
      component: _446866cc,
      name: "Home"
    }, {
      path: "options1",
      component: _1ea3063b,
      name: "Home-options1"
    }, {
      path: "options2",
      component: _1eb11dbc,
      name: "Home-options2"
    }, {
      path: "options3",
      component: _1ebf353d,
      name: "Home-options3"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
