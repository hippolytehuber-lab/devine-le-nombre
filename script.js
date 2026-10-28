// Le nombre secret, choisi au hasard entre 1 et 100
let secret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

const formulaire = document.getElementById("formulaire");
const champ = document.getElementById("essai");
const message = document.getElementById("message");
const compteur = document.getElementById("compteur");
const rejouer = document.getElementById("rejouer");

formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault();
  const nombre = Number(champ.value);
  essais++;
  compteur.textContent = `Essais : ${essais}`;

  if (nombre < secret) {
    message.textContent = `${nombre} : c'est plus !`;
  } else if (nombre > secret) {
    message.textContent = `${nombre} : c'est moins !`;
  } else {
    message.textContent = `Bravo, c'était ${secret} ! Trouvé en ${essais} essais.`;
    champ.disabled = true;
    rejouer.hidden = false;
  }

  champ.value = "";
  champ.focus();
});

rejouer.addEventListener("click", () => {
  secret = Math.floor(Math.random() * 100) + 1;
  essais = 0;
  compteur.textContent = "Essais : 0";
  message.textContent = "";
  champ.disabled = false;
  rejouer.hidden = true;
  champ.focus();
});
