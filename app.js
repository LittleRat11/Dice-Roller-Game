function shuffle() {
    const img = document.querySelector("#img");
    let random = Math.floor(Math.random() * 6) + 1;
    img.src = `./images/${random}.png`;
    const rollResult = random;
    getDiceFace(rollResult);
    historyList.push(rollResult);
    updateRollHistory();

}
document.querySelector(".roll-btn").addEventListener("click", anim)

function anim() {
    setTimeout(shuffle, 2000);
    const img = document.querySelector("#img");
    img.src = "./images/dice-roll.gif";

}
let historyList = [];
const rollHistory = document.querySelector("#roll-history");

function updateRollHistory() {
    rollHistory.innerHTML = ``;
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1} : <span>${getDiceFace(historyList[i])}</span>`;
        rollHistory.appendChild(listItem)
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return `Your Number is 1`;
            break;
        case 2:
            return `Your Number is 2`;
            break;
        case 3:
            return `Your Number is 3`;
            break;
        case 4:
            return `Your Number is 4`;
            break;
        case 5:
            return `Your Number is 5`;
            break;
        case 6:
            return `Your Number is 6`;
            break;
        default:
            return ""

    }
}