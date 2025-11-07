const button = document.getElementById("button")
const textList = ["I change text!", "I told you so, why didn't you believe me?", "what, want something more?", "I don't feel like adding more text so it will loop now."]
let clicks = 1

function ChangeText() {
    button.innerText = textList[clicks % textList.length]
    clicks += 1
}

button.addEventListener("click", ChangeText)