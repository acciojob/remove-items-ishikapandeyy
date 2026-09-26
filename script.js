//your JS code here. If required.
let select = document.getElementById("colorSelect");
let btn = document.querySelector('input[value="Select and Remove"]');

btn.addEventListener("click", function () {
    if (select.selectedIndex !== -1) {
        let option = select.options[select.selectedIndex];
        select.removeChild(option);
    }
});