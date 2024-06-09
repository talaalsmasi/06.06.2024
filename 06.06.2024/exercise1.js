

document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("mydiv");
    myDiv.addEventListener("mouseover", function() {
        myDiv.textContent = "Can I help you?";
    });
    myDiv.addEventListener("mouseout", function() {
        myDiv.textContent = "Hello world";
    });
});
let mydiv = document.getElementById('mydiv');
mydiv.addEventListener("mouseover", )