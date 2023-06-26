// const words = ["Hydration for you", "Sunscreen", "Watermelon", "Swimsuit", "Exercise", "Outdoor", "Vitamin D", "Fresh fruits", "Beach", "Stay active", "Stay cool", "Healthy snacks"]

// Sunscreen, Watermelon

const element = document.getElementById('container-content');

document.getElementById("textareaData").value = 'Hydration for you,Sunscreen,Watermelon,Swimsuit,Exercise,Outdoor,Vitamin D,Fresh fruits,Beach,Stay active,Stay cool,Healthy snacks'

function getData() {
    let words = []
    let data = document.getElementById("textareaData").value
    words = data.split(',');
    return words;
}

function generateForm() {
    let words = getData()
    console.log(document.getElementsByClassName('shuffled-wrapper') ? 'yes' : 'no')

    if (words[0] != '') {
        console.log(words)
        words.forEach(word => {
            word = word.toLocaleUpperCase()
            let shuffledWord = shuffleWord(word)
            generateDom(word, shuffledWord)
        });
    }

}

function reGenerateForm() {
    let words = getData()

    if (document.getElementsByClassName('shuffled-wrapper')) {
        let pNodeList = document.getElementsByClassName('shuffled-wrapper')
        var pArray = Array.from(pNodeList);

        let shuffledWord = []

        if (words[0] != '') {
            console.log(words)
            words.forEach(word => {
                word = word.toLocaleUpperCase()
                shuffledWord.push(shuffleWord(word))
            });
        }

        pArray.forEach((element, i) => {
            element.textContent = shuffledWord[i]
        })

    }
}