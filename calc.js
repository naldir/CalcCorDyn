function calcAjust(nominal, toleranceClass) {
    const aju = DB[toleranceClass].find(e => e.DNmin < nominal && e.DNmax > nominal);
 
    const upper = aju.upTol * 0.001;
    const lower = aju.lowTol * 0.001;

    return ({
        "coteMax" : nominal + upper,
        "coteMin" : nominal + lower,
        "coteMoyenne" : nominal + ((upper + lower) / 2)});
}

function calcCoteMoyenne() {
    var coteMoyenne = null;
    var coteMin = null;
    var coteMax = null;
    
    const coteType = document.querySelector("input[type='radio'][name='typeCoteVoulue']:checked").id;
    switch (coteType){
        case 'typeMoyenne':
            coteMoyenne = parseFloat(document.getElementById("moyenne").value);
            break;

        case 'typeTolerancee':
            var coteNominale = parseFloat(document.getElementById("nominaleTol").value);

            const sup = parseFloat(document.getElementById("toleranceSup").value);
            coteMax = coteNominale + sup;

            const inf = parseFloat(document.getElementById("toleranceInf").value);
            coteMin = coteNominale + inf;

            coteMoyenne = coteNominale + ((sup + inf) / 2);
            break;

        case 'typeAjustee':
            var coteNominale = parseFloat(document.getElementById("nominaleAju").value);
            const toleranceClass = arbre.value || alesage.value
            const ajus = calcAjust(coteNominale, toleranceClass);
            
            coteMin = ajus.coteMin;
            coteMax = ajus.coteMax;
            coteMoyenne = ajus.coteMoyenne;
            break;
    }
    return ({
        "coteMax" : coteMax,
        "coteMin" : coteMin,
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