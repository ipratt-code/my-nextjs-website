---
title: "Blog"
---

<script context="module">
  import { posts } from "$lib/posts"
  /** @type {import("@sveltejs/kit").Load} */
  export const load = async () => {
    
    return {
      props: {
        pages: (await posts()),
      }
    };
  };
</script>

<script>
  export let pages;
  const locale = "en-US";
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
</script>

<svelte:head>

  <title>Ian Pratt | Blog</title>
</svelte:head>

# **Blog**

{#each pages as post}

## [{post.metadata.title}](/blog/{post.metadata.slug})

#### Published on {new Date(post.metadata.date).toLocaleDateString(locale, options)}

{#if post.metadata.tags != undefined}

##### Tags: {#each post.metadata.tags as tag, index}{#if index > 0}, <a href={"/blog/tags/" + tag}>{tag}</a>{:else}<a href={"/blog/tags/" + tag}>{tag}</a>{/if}{/each}

{/if}

{/each}