<script lang="ts">
</script>

<svelte:head>
  <title>dotations locales</title>
</svelte:head>

<main>
  <section>
    <p id="recherche">Rechercher votre collectivité</p>
    <div id="recherche">
      <div id="quoi">
        <div id="saisie">Chauffailles</div> 
        <hr />
      </div>
      <div id="button">
        <button>
          <p id="button">Rechercher</p>
        </button>
      </div>
    </div>  
    <p id="detail-recherche">détail recherche</p>
  </section>
</main>

<style>
  main {
    overflow-y: auto;
  }

  section {
    /* SECTION */
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

  p#recherche {
    /* Rechercher votre collectivité */

    width: 560px;
    height: 48px;

    /* 1.Titres/H1 - XL/Desktop */
    font-family: "Marianne-Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height, or 120% */
    text-align: center;

    /* light/text/title-grey */
    color: #161616;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  div#recherche {
    /* Barre de recherche

    Barre permettant d'accéder rapidement à du contenu.
    */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 792px;
    height: 56px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  div#quoi {
    /* Champ */

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 585px;
    height: 56px;

    /* light/background/contrast-grey */
    background: #eeeeee;
    border-radius: 4px 0px 0px 0px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 1;
  }

  div#saisie {
    /* Saisie */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;

    width: 585px;
    height: 56px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  div#button {
    /* ⚙️ Varier les propriétés - Bouton

    Élément d'interaction de base.
    Taille fixe recommandée.

    Il est possible d'élargir le bouton, pour cela il faut changer la propriété "Resizing" du calque "Redimensionner ici" en "Fill container" et agrandir tout le composant.
    */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 207px;
    height: 56px;

    border-radius: 0px 4px 0px 0px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  button {
    /* Redimensionner ici */

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;

    width: 207px;
    height: 56px;

    /* light/background/action-high-blue-france */
    background: #000091;
    border-radius: 0px 4px 0px 0px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }

  p#button {
    /* Label bouton */

    width: 111px;
    height: 32px;

    /* 2.Corps de texte/LG - Texte article/Desktop/Regular */
    font-family: "Marianne-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */
    text-align: center;

    /* light/text/inverted-blue-france */
    color: #f5f5fe;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
  }

  hr {
    /* Bordure */

    box-sizing: border-box;
    margin: 0;

    width: 792px;
    height: 0px;

    /* light/border/plain-blue-france */
    border: 2px solid #000091;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  p#detail-recherche {
    /* Egestas magna eu, condimentum amet. Vitae odio mauris suspendisse duis vestibulum. Nulla. */

    width: 720px;
    height: 24px;

    /* 2.Corps de texte/MD - Texte standard/Desktop & Mobile - Regular */
    font-family: "Marianne-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    text-align: center;

    /* light/text/default-grey */
    color: #3a3a3a;

    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
  }
</style>
