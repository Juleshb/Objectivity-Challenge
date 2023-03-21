# Objectivity-Challenge
Objectivity .NET Course Coding Challenge

- Challenge questions:

## Word Frequency Analyzer:
Create a function that reads a text input and outputs a list of unique words in the text, along with their frequency count. The words should be sorted by frequency, with the most frequent words appearing first.
- Answer:
- This code defines a function called word that takes a string text as input. The function performs the following steps:

- Converts the input text to lowercase and removes any punctuation marks (,, ., ?, and !) using a regular expression.
- Splits the text into an array of words using the split() method.
- Creates a Map object called freqMap to store the frequency of each word in the text.
- Loops through each word in the array, incrementing the frequency count for that word in the freqMap.
- Sorts the entries in the freqMap by descending order of frequency using the sort() method and returns the sorted array.

## Text-based Quiz Application:
Develop a text-based quiz application with multiple-choice questions. The app should read questions with answers from an array, display the question randomised to the user, track the user's score, and provide a final summary of the results
