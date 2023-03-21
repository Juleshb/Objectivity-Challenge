function word(text) {
 
  text = text.toLowerCase().replace(/[,\.?!]/g, "");
  const words = text.split(" ");
  const freqMap = new Map();
  for (const word of words) {
    if (freqMap.has(word)) {
      freqMap.set(word, freqMap.get(word) + 1);
    }
    else {
      freqMap.set(word, 1);
    }
  }
  const sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  return sortedFreq;
}

const text = "the most frequent words appearing first. the most frequent words.";
console.log(word(text));
