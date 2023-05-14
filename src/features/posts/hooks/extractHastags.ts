/** @format */

function extractHashtags(string: string) {
  const regex = /#\w+/g;
  const hashtags = string.match(regex);
  if (!hashtags) return [];
  return hashtags.map((tag: string) => ({ hashtag: tag }));
}

function extractCaptionNames(text:string) {
  const regex = /@\[(.*?)\]/g; // Regular expression to match all occurrences of caption names
  const matches = text.match(regex); // Find all matches in the text
  if (matches) { // If matches are found
    const names = matches.map(match => match.substring(2, match.length - 1)); // Extract the names from the matches
    return names;
  }
  return [] // If no matches are found, return null
}


export { extractHashtags,extractCaptionNames };
