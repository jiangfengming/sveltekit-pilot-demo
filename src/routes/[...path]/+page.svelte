<script>
  import { page } from '$app/stores'
  import { ClientApp, ServerApp } from 'svelte-pilot'

  export let data

  const router = data.router

  $: {
    if (!import.meta.env.SSR) {
      router.clientContext = data.ctx
      router.handleClient($page.url.href, data.route.ssrState)
    }
  }
</script>

{#if import.meta.env.SSR}
  <ServerApp {router} route={data.route} />
{:else}
  <ClientApp {router} />
{/if}