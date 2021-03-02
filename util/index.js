module.exports.formatResponse = ({ quote, character, anime }) => {
	quote = quote.replace(/\\|\//g, '');
	return `\n\n\n> ***${quote}***\n\n - ✍️ ${character} (${anime})`;
};

module.exports.notFoundErrorResponse = string => {
	return `⚠️ No quotes from _${string}_ is available now !\n\n`;
};

module.exports.commandInfo = ` [random | anime <anime name> |  char <character name>]\n
- \`!quote random\`: Get a random quote
- \`!quote anime naruto\`: Get a random quote from the specified Anime
- \`!quote char saitama\`: Get a random quote of the specified Character\n`;
