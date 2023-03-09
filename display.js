var form = document.querySelector("form");
const mesuree = document.getElementById("coteMesuree");
const arbre = document.getElementById("arbre");
const alesage = document.getElementById("alesage");
const tour = document.getElementById("tour");
const fraiseuse = document.getElementById("fraiseuse");
const geometries = document.querySelectorAll("input[type='radio'][name='geometrie']");

function checkTol(mesuree, min, max) {
    const checkSpan = document.getElementById("check");

    if (!min || !max) {
        checkSpan.setAttribute("data-after", "");
        checkSpan.classList.remove("ok");
        checkSpan.classList.remove("nok");
    } else if (mesuree >= min && mesuree <= max) {
        checkSpan.setAttribute("data-after", " ✓");
        checkSpan.classList.add("ok");
        checkSpan.classList.remove("nok");
    } else {
        checkSpan.setAttribute("data-after", " ✗");
        checkSpan.classList.add("nok");
        checkSpan.classList.remove("ok");
    }
}

function changeText() {
    const cotes = calcCoteMoyenne();
    var corDyn = CalcCorDyn(cotes.coteMoyenne);

    cotes.coteMoyenne = Math.round(cotes.coteMoyenne * 1000)/1000;
    cotes.coteMax = Math.round(cotes.coteMax * 1000)/1000;
    cotes.coteMin = Math.round(cotes.coteMin * 1000)/1000;
    corDyn = Math.round(corDyn * 1000)/1000;


    document.getElementById("moyenneText").innerHTML = cotes.coteMoyenne || "";
    document.getElementById("maxText").innerHTML = cotes.coteMax || "";
    document.getElementById("minText").innerHTML = cotes.coteMin || "";
    document.getElementById("corDynText").innerHTML = corDyn || "";

    checkTol(mesuree.value, cotes.coteMin, cotes.coteMax);
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