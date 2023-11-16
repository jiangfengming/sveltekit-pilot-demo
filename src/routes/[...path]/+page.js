import router from './router'

export async function load({ url, fetch }) {
  const ctx = { fetch }
  const route = await router.handleServer(url.href, ctx)
  return { router, route, ctx }
}
