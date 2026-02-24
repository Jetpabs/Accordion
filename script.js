const button = document.getElementsByClassName("accordion");
const paragraph = document.getElementsByClassName("accordion-description");
let buttonClicked = [];

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].hidden = true;
}

for (let i = 0; i < button.length; i++) {
    buttonClicked[i] = false;
    button[i].addEventListener("click", () => {
        if (buttonClicked[i]) {
            paragraph[i].hidden = true;
            buttonClicked[i] = false;
        } else {
            paragraph[i].hidden = false;
            buttonClicked[i] = true;
        }
    });
}