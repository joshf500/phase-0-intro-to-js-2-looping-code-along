const cards = []
function writeCards(name, event){
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
}
return cards;
}
function countDown(count) {
    while (count>=0){
        console.log(count--)
    }
}

