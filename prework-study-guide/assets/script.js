var topics = ["HTML", "CSS", "Git", "JavaScript"]

var randomTopic = topics[Math.floor(Math.random()* topics.length)]
//Math.floor(x) always rounds down and returns the largest integer (non-decimal) less than or equal to a number given
//Math.random returns a decimal, pseudo-random number that's greater than or euqal to 0 and less than 1


function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log (topics[x]);
    }
}


function selectTopic () {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!")
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!")
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!")
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!")
    } else {
        console.log("Please try again!")
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?')
selectTopic()