document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addButton");
    var songInput = document.getElementById("songTextInput");
    var playlist = document.getElementById("playlist");

    addButton.addEventListener("click", function() {
        var songName = songInput.value.trim();

        if (songName === "") {
            alert("Please enter a song name.");
            return;
        }

        var listItem = document.createElement("li");
        listItem.textContent = songName;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            playlist.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        playlist.appendChild(listItem);

        songInput.value = "";
    });
});