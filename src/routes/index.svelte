<script lang="ts">
</script>

<svelte:head>
  <title>dotations locales</title>
</svelte:head>

<main>
  <section>
    Rechercher votre collectivité
    <textarea value="Chauffailles" />
  </section>
</main>

<style>
  section {
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0px;
    gap: 24px;

    width: 1440px;
    height: 336px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }
</style>
