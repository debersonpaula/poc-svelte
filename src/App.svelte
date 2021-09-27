<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <header>
    <h1>Svelte App</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>

  <main>
    <Route path="/">
      <Home />
    </Route>

    <Route path="/about">
      <About />
    </Route>
  </main>
</Router>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
