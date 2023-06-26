function generateDom(word, shuffledWord) {
    let div = document.createElement('div');
    div.classList.add("words-wrapper");
    let pWord = document.createElement('p');
    let pShuffled = document.createElement('p');

    pShuffled.classList.add("shuffled-wrapper");
    pWord.textContent = word
    console.log(shuffledWord)
    pShuffled.textContent = shuffledWord






    // div.appendChild(pWord)
    div.appendChild(pShuffled)
    element.appendChild(div)
    generateLines(word, div)




}