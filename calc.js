function calcAjust(nominal, toleranceClass) {
    const aju = DB[toleranceClass].find(e => e.DNmin <= nominal && e.DNmax > nominal);
    if (aju == undefined) {
        alert("cet ajustement n'est pas disponible pour cette dimmension.")
    }
 
    const tolSup = aju.upTol * 0.001;
    const tolInf = aju.lowTol * 0.001;

    return ({
        "coteMax" : nominal + tolSup,
        "coteMin" : nominal + tolInf,
        "tolSup" : tolSup,
        "tolInf" : tolInf,
        "coteMoyenne" : nominal + ((tolSup + tolInf) / 2)});
}

function calcCoteMoyenne() {    
    const coteType = document.querySelector("input[type='radio'][name='typeCoteVoulue']:checked").id;
    switch (coteType){
        case 'typeMoyenne':
            var coteMoyenne = parseFloat(document.getElementById("moyenne").value);
            break;

        case 'typeTolerancee':
            var coteNominale = parseFloat(document.getElementById("nominaleTol").value);

            var tolSup = parseFloat(document.getElementById("toleranceSup").value);
            var coteMax = coteNominale + tolSup;

            var tolInf = parseFloat(document.getElementById("toleranceInf").value);
            var coteMin = coteNominale + tolInf;

            var coteMoyenne = coteNominale + ((tolSup + tolInf) / 2);
            break;

        case 'typeAjustee':
            var coteNominale = parseFloat(document.getElementById("nominaleAju").value);
            const toleranceClass = arbre.value || alesage.value
            const ajus = calcAjust(coteNominale, toleranceClass);
            
            var coteMin = ajus.coteMin;
            var coteMax = ajus.coteMax;
            var tolSup = ajus.tolSup;
            var tolInf = ajus.tolInf;
            var coteMoyenne = ajus.coteMoyenne;
            break;
    }

    return ({
        "coteMax" : coteMax,
        "coteMin" : coteMin,
        "tolInf" : tolInf,
        "tolSup" : tolSup,
        "coteMoyenne" : coteMoyenne});
}

function CalcCorDyn(coteMoyenne) {
    const coteMesuree = parseFloat(document.getElementById("coteMesuree").value);

    var corDyn = null;

    const machine = document.querySelectorAll("input[type='radio'][name='machine']:checked")[0].id;
    const geometrie = document.querySelectorAll("input[type='radio'][name='geometrie']:checked")[0].id;

    if (machine == "tour") {
        corDyn = coteMoyenne - coteMesuree;
    } else if (machine == "fraiseuse") {
        switch (geometrie) {
            case "contour":
                corDyn = (coteMoyenne - coteMesuree) / 2;
                break;
            case "poche":
                corDyn = (coteMoyenne - coteMesuree) * -1 / 2;
                break;
            case "simple":        
            default:
                corDyn = (coteMoyenne - coteMesuree);
                break;
        }
    }
    return (corDyn);
}