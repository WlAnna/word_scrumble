function generateLines(word, div) {
    let divLines = document.createElement('div');
    divLines.classList.add("lines-wrapper");
    for (let letter of word) {
        let pLines = document.createElement('p');
        pLines.classList.add("p-wrapper");
        if (letter != ' ') {
            // pLines.textContent = ' ' + '' + ' ';
        } else {
            pLines.classList.add("p-blank");
            pLines.textContent = 'z';
        }

        divLines.appendChild(pLines)
        div.appendChild(divLines)
        element.appendChild(div)
    }

}