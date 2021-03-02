# Animechan Discord bot

A simple discord bot that generates random anime quotes from various animes on command. All the quotes are generated with the official [Animechan API](https://animechan.vercel.app/).

## Available commands

- `!quote random` : Displays one random quote from any availabe anime
- `!quote anime [anime name]` : Displays one random quote from the specified Anime. ex: `!quote anime naruto`
- `!quote char [character name]` : Displays one random quote from the specified Anime Character. ex: `!quote char saitama`
- `!help` : Lists all the availabe commads
- `!help [command name]` : Displays information on the specified command name. ex: `!help quote`



## Getting started

### Installation

```sh
# Clone the repository
git clone https://github.com/rocktimsaikia/anime-discord-bot.git

# Enter into the directory
cd anime-discord-bot/

# Install the dependencies
npm install 
```
[Yarn](https://yarnpkg.com/) is recommended for installation but npm is fine too.

### Configuration

After the installing go the `config.json` file in the root directory and add your Discord API token.

### Starting the application

```sh
npm start
```

This will run the application in development mode.

### License
MIT © [rocktimsaikia](https://rocktimsaikia.now.sh) 2021