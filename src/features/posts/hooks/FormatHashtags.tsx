function formatText(text:string) {
    const hashtagRegex = /#\w+/g;
    const parts = text.split(hashtagRegex);
    return parts.map((part, index) => {
      if (part.match(hashtagRegex)) {
        const hashtag = part.slice(1);
        return (
          <a href={`/search?q=${hashtag}`} key={`hashtag-${hashtag}`}>
            {part}
          </a>
        );
      } else {
        return <span key={`text-${index} bg-red-400`}>{part}</span>;
      }
    });
  }
  export default formatText