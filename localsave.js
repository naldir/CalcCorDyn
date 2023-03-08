// Save the form state
function saveState() {
    const formElements = document.querySelectorAll("form input, form textarea, form select");
    const formData = {};
    
    for (var i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type == "checkbox" || element.type == "radio") {
            formData[element.name] = element.checked;
        } else {
            formData[element.name] = element.value;
        }
    }
    localStorage.setItem("formData", JSON.stringify(formData));
}

// Attach the function to all form elements
var form = document.querySelector("form");
form.addEventListener("input", saveState);

// Restore the form state
function restoreState() {
    const machine = document.querySelectorAll("input[type='radio'][name='machine']:checked")[0].id;
    if (machine == "fraiseuse") {
        showFraiseuseForm(false);
    } else {
        hideFraiseuseForm();
    }
    
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
        const formElements = document.querySelectorAll("form input, form textarea, form select");
        for (var i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (formData[element.name]) {
                if (element.type == "checkbox" || element.type == "radio") {
                    element.checked = formData[element.name];
                } else {
                    element.value = formData[element.name];
                }
            }
        }
    }
    
    changeText();
}

// On page load
document.addEventListener("DOMContentLoaded", restoreState);
document.addEventListener("DOMContentLoaded", CalcCorDyn);