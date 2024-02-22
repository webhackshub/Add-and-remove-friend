var logic = 0
var button = document.querySelector("button")
var profileStatus = document.querySelector("h6")

button.addEventListener("click", function () {
    if (logic === 0) {
        logic = 1
        profileStatus.style.color = "green"
        profileStatus.textContent = "Friends"
        button.textContent = "Remove Friend"
        button.style.backgroundColor = "red"
    } else {
        logic = 0
        profileStatus.style.color = "red"
        profileStatus.textContent = "Strangers"
        button.textContent = "Add Friend"
        button.style.backgroundColor = "#016fff"
    }
})