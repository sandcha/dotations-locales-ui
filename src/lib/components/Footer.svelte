<script lang="ts">
</script>

<section>
  <hr />
  <div>
    <div id="marque">
      <img src="logo-republique-fr.svg" alt="Logo de la République Française" />
      <img
        src="logo-incubateur-territoires.svg"
        alt="Logo de l'Incubateur des Territoires"
      />
    </div>
    <div id="description">
      <p>description</p>
      <a href="https://incubateur.anct.gouv.fr">incubateur.anct.gouv.fr</a>
    </div>
  </div>
</section>

<style>
  hr {
    /* Séparateur */
    height: 2px;
    left: 0px;
    right: 0px;
    top: 0px;

    /* light/border/plain-blue-france */
    background: #000091;

    border: 0px solid;
  }

  div {
    /* Contenu */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 120px 20px 100px;
    gap: 109px;

    width: 1440px;
    height: 191px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  div#marque {
    /* Bloc marque et logo */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 346.55px;
    height: 151px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  div#description {
    /* Description */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 588px;
    height: 136px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  p {
    /* Texte optionnel 3 lignes maximum */

    width: 588px;
    height: 96px;

    /* 2.Corps de texte/SM - Texte détail/Desktop & Mobile - Regular */
    font-family: "Marianne-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    /* light/text/default-grey */
    color: #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  a {
    width: 82px;
    height: 24px;

    /* 2.Corps de texte/SM - Texte détail/Desktop & Mobile - Bold */
    font-family: "Marianne-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    /* light/text/default-grey */
    color: #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 3;
    flex-grow: 0;
  }
</style>
