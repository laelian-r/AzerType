const mots = ["chat", "chien", "oiseau", "poisson", "lapin"];
let score = document.querySelector('#score');
let counter = 0;

while (counter < mots.length) {
    let response = prompt('Ecris le mot: ' + '"' + mots[counter] + '"');
    if(response === mots[counter]) {
        alert(`C'est bien ma poule`);
        counter++;
        score.textContent = counter;
    } else {
        alert('APPREND À ÉCRIRE BATARD!');
    }
}