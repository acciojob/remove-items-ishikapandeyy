//your JS code here. If required.
let select = document.getElementById("colorSelect");
let btn = document.querySelector('input[value="Select and Remove"]');

btn.addEventListener("click", function () {
    select.remove(select.selectedIndex);
});