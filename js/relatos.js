function addComment() {
    const nameInput = document.getElementById("nameInput");
    const nameText = nameInput.value.trim();
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value.trim();
    if (commentText !== "" && nameText !== "") {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const commentTextDiv = document.createElement("div");
        commentTextDiv.classList.add("text");

        const nameP = document.createElement("p");
        nameP.classList.add("p-name");
        nameP.textContent = `${nameText}:`;
        commentTextDiv.appendChild(nameP);

        const textP = document.createElement("p");
        textP.classList.add("p-comment");
        textP.textContent = commentText;
        commentTextDiv.appendChild(textP);

        commentDiv.appendChild(commentTextDiv);

        const dateI = document.createElement("i");
        const dateToday = new Date();
        dateI.textContent = `${dateToday.toLocaleDateString()} ${dateToday.getHours()}:${dateToday.getMinutes()}`;
        commentDiv.appendChild(dateI);

        document.getElementById("comments").appendChild(commentDiv);

        nameInput.value = "";
        commentInput.value = "";
    } else {
        alert("Favor inserir o seu nome e o seu relato antes de enviar.");
    }
}