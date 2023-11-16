<script context="module">
  export async function load(props, route, ctx) {
    const res = await ctx.fetch('https://catfact.ninja/fact')
    return res.json()
  }
</script>

<script>
  export let fact
</script>

<h1>{fact}</h1>
