<script lang="ts">
</script>

<nav>
  <img src="logo-republique-fr.svg" alt="Logo de la République Française" />
  <ul>
    <li>Notre mission</li>
    <li>Contact</li>
  </ul>
</nav>

<style>
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
  }

  ul {
    list-style-image: url("picto-fleche-droite.svg");
  }
</style>
