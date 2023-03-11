var form = document.querySelector("form");
const mesuree = document.getElementById("coteMesuree");
const arbre = document.getElementById("arbre");
const alesage = document.getElementById("alesage");
const tour = document.getElementById("tour");
const fraiseuse = document.getElementById("fraiseuse");
const geometries = document.querySelectorAll("input[type='radio'][name='geometrie']");


function round3(number) {
    return Math.round(number * 1000)/1000;
}

function sign(number) {
    if (number.toString().startsWith("-") || number == 0) {
        return number.toString();
    } else {
        return "+" + number.toString();
    } 
}

function checkTol(mesuree, min, max) {
    const checkSpan = document.getElementById("check");
    const minText = document.getElementById("minText");
    const maxText = document.getElementById("maxText");

    if (!min || !max) {
        checkSpan.setAttribute("data-after", "");
        checkSpan.classList.remove("ok");
        checkSpan.classList.remove("nok");
        checkSpan.removeAttribute("title");
        minText.classList.remove("nok");
        maxText.classList.remove("nok");
        minText.removeAttribute("title");
        maxText.removeAttribute("title");
    } else if (mesuree >= min && mesuree <= max) {
        checkSpan.setAttribute("data-after", " ✓");
        checkSpan.setAttribute("title", "Cote ok");
        checkSpan.classList.add("ok");
        checkSpan.classList.remove("nok");
    } else {
        checkSpan.setAttribute("data-after", " ✗");
        checkSpan.setAttribute("title", "Cote hors tolérance");
        checkSpan.classList.add("nok");
        checkSpan.classList.remove("ok");
        if (mesuree < min) {
            minText.classList.add("nok");
            minText.setAttribute("title", "Cote hors tolérance");
            maxText.classList.remove("nok");
            maxText.removeAttribute("title");
        } else if (mesuree > max) {
            maxText.classList.add("nok");
            maxText.setAttribute("title", "Cote hors tolérance");
            minText.classList.remove("nok");
            minText.removeAttribute("title");
        }
    }
}

function changeText() {
    const cotes = calcCoteMoyenne();
    var corDyn = CalcCorDyn(cotes.coteMoyenne);

    cotes.coteMoyenne = round3(cotes.coteMoyenne);
    cotes.coteMax = round3(cotes.coteMax);
    cotes.coteMin = round3(cotes.coteMin);
    corDyn = round3(corDyn);

    const supText = cotes.tolSup ? ` (${sign(round3(cotes.tolSup))})` : "";
    const infText = cotes.tolSup ? ` (${sign(round3(cotes.tolInf))})` : "";


    document.getElementById("moyenneText").innerHTML = cotes.coteMoyenne || "";
    document.getElementById("maxText").innerHTML = (cotes.coteMax || "") + supText;
    document.getElementById("minText").innerHTML = (cotes.coteMin || "") + infText;
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
tour.addEventListener("click", hideFraiseuseForm);
fraiseuse.addEventListener("click", showFraiseuseForm);

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