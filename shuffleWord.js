function shuffleWord(word) {
    let shuffledWord = '';
    const hasSpace = word.includes(' ')


    if (!hasSpace) {
        word = word.split('');
        while (word.length > 0 && !hasSpace) {
            shuffledWord += word.splice(word.length * Math.random() << 0, 1);
        }
    } else {
        word = word.split(' ');
        let partials = []
        word.forEach(element => {
            element = element.split('')
            partials.push(element)
        });

        partials.forEach(p => {
            // console.log(p)
            while (p.length > 0 && hasSpace) {
                shuffledWord += p.splice(p.length * Math.random() << 0, 1);
            }
            shuffledWord += ' '
        })

    }

    return shuffledWord;
}