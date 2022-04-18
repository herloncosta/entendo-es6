export default function capitalize(text = "some text needs to be entered") {
    let arrNormalWords = text.split(" ");
    let arrCapitalWords = [];

    for (let word of arrNormalWords) {
        let capitalWord = `${word[0].toUpperCase()}${word.slice(
            1,
            word.length
        )}`;
        arrCapitalWords.push(capitalWord);
    }

    let capitalText = arrCapitalWords.join(" ");
    return capitalText;
}
// console.log(capitalize());
// console.log(capitalize("herlon diego"));
