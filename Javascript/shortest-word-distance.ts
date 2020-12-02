function shortestDistance(words: string[], word1: string, word2: string): number {
    const map = new Map<string, number[]>();
    words.forEach((word, index) => {
        if(map.has(word)) {
            map.get(word).push(index);
        } else {
            map.set(word, [index]);
        }
    });
    const word1Indexes = map.get(word1)
    const word2Indexes = map.get(word2);
    let min: number = words.length;
    word1Indexes.forEach((index1) => {
        word2Indexes.forEach((index2) => {
            const sub = Math.abs(index1 - index2);
            min = sub < min? sub : min;
        })
    })
    return min;
};


const words = ["practice", "makes", "perfect", "coding", "makes"];

console.log(shortestDistance(words, 'coding', 'practice'));
// Output: 3

console.log(shortestDistance(words, 'makes', 'coding'));
// Output: 1