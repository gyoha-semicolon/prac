function asdf() {

    var button = document.getElementById("color-mode-btn");
    var body = document.body;
    var container = document.querySelector('.container');

    if (button.textContent === "on") {
        button.textContent = "off";
        body.classList.replace("light-mode", "dark-mode");
        container.style.borderRightColor = 'white';
    } else {
        button.textContent = "on";
        body.classList.replace("dark-mode", "light-mode");
        container.style.borderRightColor = 'black';
    }
}