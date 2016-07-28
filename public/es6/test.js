const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', objects: 'large'},
];

function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let sentence of sentences) {
    say(sentence);
}
