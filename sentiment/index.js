const natural = require("natural");

// Simple sentiment analyzer setup
const analyzer = new natural.SentimentAnalyzer(
  "English",
  natural.PorterStemmer,
  "afinn"
);

// Function to analyze sentiment of text
function analyzeSentiment(text) {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(text);
  return analyzer.getSentiment(tokens);
}

module.exports = { analyzeSentiment };
