function reverseWordsInSentence(sentence) {
    // Spliting the sentence into words
    const words = sentence.split(' ');
  
    // Reverse each word and store them in an array
    const reversedWords = words.map (word =>
    {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  //Given Example usage
  const inputSentence = "This is a sunny day";
  const reversedSentence = reverseWordsInSentence(inputSentence);
  
  console.log(reversedSentence);

    //Input : "This is a sunny day"
   // Output: "sihT si a ynnus yad"