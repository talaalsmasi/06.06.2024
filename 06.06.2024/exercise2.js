document.addEventListener("DOMContentLoaded", function() {
    var myDiv = document.getElementById("mydiv");
    var colors = ["blue", "pink", "red"];
    var currentIndex = 0;

    myDiv.addEventListener("click", function() {
        myDiv.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    });
});