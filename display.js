var form = document.querySelector("form");
const arbre = document.getElementById("arbre");
const alesage = document.getElementById("alesage");
const tour = document.getElementById("tour");
const fraiseuse = document.getElementById("fraiseuse");
const geometries = document.querySelectorAll("input[type='radio'][name='geometrie']");

function changeText() {
    const cotes = calcCoteMoyenne();
    const corDyn = CalcCorDyn(cotes.coteMoyenne);

    document.getElementById("moyenneText").innerHTML = Math.round(cotes.coteMoyenne * 1000)/1000 || "";
    document.getElementById("maxText").innerHTML = Math.round(cotes.coteMax * 1000)/1000 || "";
    document.getElementById("minText").innerHTML = Math.round(cotes.coteMin * 1000)/1000 || "";
    document.getElementById("corDynText").innerHTML = Math.round(corDyn * 1000)/1000 || "";
}

form.addEventListener("input", changeText);

arbre.addEventListener("input", function(){
    alesage.selectedIndex = 0;
});
alesage.addEventListener("input", function(){
    arbre.selectedIndex = 0;
});
tour.addEventListener("input", hideFraiseuseForm);
fraiseuse.addEventListener("input", showFraiseuseForm);

function showFraiseuseForm(checked = true) {
    document.getElementById("fraiseuseOnly").hidden = false;
}
function hideFraiseuseForm() {
    document.getElementById("fraiseuseOnly").hidden = true;
}

var select = document.getElementById("arbre");
for (let i = 0; i < DBarbres.length; i++) {
    var opt = document.createElement("option");
    opt.value = DBarbres[i];
    opt.text = DBarbres[i];

    select.add(opt);
}

var select = document.getElementById("alesage");
for (let i = 0; i < DBalesages.length; i++) {
    var opt = document.createElement("option");
    opt.value = DBalesages[i];
    opt.text = DBalesages[i];

    select.add(opt);
}