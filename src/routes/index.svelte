<script lang="ts">
</script>

<svelte:head>
  <title>dotations locales</title>
</svelte:head>

<main>
  <nav>
    <img src="logo-republique-fr.svg" alt="Logo de la République Française"/>
    <ul>
      <li>Notre mission</li>
      <li>Contact</li>
    </ul>
  </nav>
</main>

<style>
  @font-face{
    font-family: 'Marianne-Regular';
    src: url('/fonts/Marianne-Regular.woff') format('woff');
    src: url('/fonts/Marianne-Regular.woff2') format('woff2');
  }

  @font-face{
    font-family: 'Marianne-Bold';
    src: url('/fonts/Marianne-Bold.woff') format('woff');
    src: url('/fonts/Marianne-Bold.woff2') format('woff2');
  }

  /* 📁 Contenant technique - En-tête */
  nav {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 120px 12px 108px;
    gap: 40px;

    width: 1440px;
    height: 102px;

    /* light/background/elevated-grey */
    background: #ffffff;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 1;

    font-family: Marianne-Regular
  }

  ul {
    list-style-image: url("picto-fleche-droite.svg");
  }
</style>
