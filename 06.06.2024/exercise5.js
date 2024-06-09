document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll("article");

    articles.forEach(article => {
        const showLink = article.querySelector(".showlink a");
        const textDiv = article.querySelector(".text");
        const hideLink = textDiv.querySelector("a");

        // Initially hide the text content
        textDiv.style.display = "none";

        // Show content when "Show" link is clicked
        showLink.addEventListener("click", function(event) {
            event.preventDefault();
            textDiv.style.display = "block";
            showLink.style.display = "none";
        });

        // Hide content when "Hide" link is clicked
        hideLink.addEventListener("click", function(event) {
            event.preventDefault();
            textDiv.style.display = "none";
            showLink.style.display = "block";
        });
    });
});