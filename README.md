

# 🎵 Advanced-Music-Bot


**High-Quality • Fast • Reliable**

A powerful Discord music bot with LavaLink integration, featuring support for YouTube and Spotify, playlists, favorites, and much more!



</div>

---

## ⚠️ Important Notice

### 📜 Usage Terms & Restrictions

**Please read carefully before using this project:**

- ❌ **DO NOT** publicly distribute, showcase, or upload this project on YouTube, social media, or any other platforms without explicit permission from A! Development
- ❌ **DO NOT** remove or modify the credits and attribution to A! Development and the developer
- ✅ You may use this bot for personal or private servers
- ✅ You may modify the code for your own use while keeping credits intact
- 📧 For permission to showcase or distribute publicly, contact us 

**Removing credits or unauthorized public distribution is strictly prohibited and disrespectful to the developers who made this project possible.**

---

## ✨ Features

- 🎶 **High-Quality Music Playback** - Powered by LavaLink for the best audio quality
- 🎵 **Multi-Platform Support** - Play from YouTube and Spotify
- 📝 **Playlist Management** - Create, save, and share custom playlists
- ⭐ **Favorites System** - Save your favorite tracks for quick access
- 🎼 **Queue Management** - Full control over your music queue
- 🎚️ **Audio Filters** - Apply various audio effects to customize your listening experience
- 🎤 **Lyrics Support** - Display lyrics for currently playing tracks
- 🔄 **Loop Modes** - Loop single tracks or entire queues
- ⏯️ **Playback Controls** - Play, pause, skip, shuffle, and more
- 🎲 **Autoplay** - Automatically queue similar songs when the queue ends
- 🖼️ **Beautiful Music Cards** - Custom artwork for now playing displays
- ⚡ **Slash Commands** - Modern Discord slash command support
- 📌 **Prefix Commands** - Traditional prefix commands (`,` by default)

---

## 📋 Commands Overview

### 🎵 Music Playback
- `/play` - Play a song or add it to the queue
- `/pause` - Pause the current track
- `/resume` - Resume playback
- `/skip` - Skip to the next track
- `/stop` - Stop playback and clear the queue
- `/nowplaying` - Display currently playing track
- `/queue` - View the current queue

### 🎛️ Queue Management
- `/shuffle` - Shuffle the queue
- `/clear` - Clear the entire queue
- `/remove` - Remove a specific track from the queue
- `/move` - Move a track to a different position
- `/back` - Go back to the previous track
- `/seek` - Seek to a specific position in the track

### 📝 Playlists
- `/playlist-save` - Save the current queue as a playlist
- `/playlist-load` - Load a saved playlist
- `/playlist-list` - View all your playlists
- `/playlist-delete` - Delete a playlist
- `/playlist-rename` - Rename a playlist
- `/playlist-share` - Share a playlist with others
- `/playlist-import` - Import a playlist from a link
- `/playlist-track-add` - Add a track to a playlist
- `/playlist-track-remove` - Remove a track from a playlist
- `/playlist-track-list` - View tracks in a playlist

### ⭐ Favorites
- `/favorite-add` - Add current track to favorites
- `/favorite-remove` - Remove a track from favorites
- `/favorite-list` - View all your favorite tracks
- `/favorite-play` - Play a track from your favorites

### 🎚️ Audio Settings
- `/volume` - Adjust the volume
- `/filter` - Apply audio filters
- `/loop` - Set loop mode (off/track/queue)
- `/autoplay` - Toggle autoplay mode

### ℹ️ Information
- `/help` - Display help information
- `/ping` - Check bot latency
- `/lyrics` - Display lyrics for the current track

---

## 🚀 Quick Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v84 or higher
- A Discord bot token ([Create one here](https://discord.com/developers/applications))
- LavaLink server (see [LavaLink Setup](#-lavalink-setup))
- (Optional) Spotify API credentials
- (Optional) Genius API key for lyrics

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/reg-exe/A-Advanced-Music-Bot.git
   cd music
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Bot Configuration
   BOT_TOKEN=your_discord_bot_token
   CLIENT_ID=your_bot_client_id
   
   # LavaLink Configuration
   LAVALINK_HOSTS=your.lavalink.host
   LAVALINK_PORTS=2333
   LAVALINK_PASSWORDS=youshallnotpass
   LAVALINK_SECURES=false
   
   # Optional: Spotify Integration
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   
   # Optional: Genius Lyrics
   GENIUS_API_KEY=your_genius_api_key
   ```

4. **Configure bot settings**
   
   Edit `music/config.js` to customize your bot:
   - Change the prefix (default: `,`)
   - Adjust playlist limits
   - Configure default music platform
   - Set artwork style

5. **Start the bot**
   ```bash
   npm start
   ```

---

## 🎸 LavaLink Setup

AeroX Music requires a LavaLink server to function. You have two options:

### Option 1: Use a Public LavaLink Server
You can use free public LavaLink servers (not recommended for production):
- [LavaLink Public Servers List](https://lavalink.darrennathanael.com/)

### Option 2: Host Your Own LavaLink Server
1. Download LavaLink from [GitHub](https://github.com/lavalink-devs/Lavalink/releases)
2. Create an `application.yml` configuration file
3. Run LavaLink: `java -jar Lavalink.jar`
4. Update your `.env` with your LavaLink credentials

---

## 🎨 Customization

### Changing the Prefix
Edit `music/config.js`:
```javascript
PREFIX: '!',  // Change to your desired prefix
```

### Adjusting Playlist Limits
```javascript
MUSIC: {
    PLAYLIST_LIMIT: 3,  // Maximum number of playlists per user
}
```

### Artwork Style
Choose between `MusicCard` (custom image card) or `Banner` (media gallery):
```javascript
MUSIC: {
    ARTWORK_STYLE: 'MusicCard'  // or 'Banner'
}
```

---

## 📁 Project Structure

```
Music/
├── commands/           # Slash commands
├── pCommands/          # Prefix commands
├── music/              # Music client and event handlers
├── helpers/            # Utility functions and helpers
├── utils/              # Logging, permissions, validation
├── database/           # Database models (favorites, playlists)
│   └── models/
├── assets/             # Images and resources
├── config.js           # Bot configuration
├── index.js            # Main entry point
└── emojis.json         # Custom emoji definitions
```

---

## 🔧 Troubleshooting

### Bot doesn't respond to commands
- Ensure the bot has proper permissions in your server
- Check that the bot token is correct
- Verify LavaLink is running and accessible

### Music doesn't play
- Confirm LavaLink server is online
- Check LavaLink credentials in `.env`
- Ensure the bot has `Connect` and `Speak` permissions in voice channels

### Spotify links don't work
- Add your Spotify Client ID and Secret to `.env`
- Get credentials from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Credits

### Development Team

**A! Music** is developed and maintained by **A! Development**



### Built With
- [Discord.js](https://discord.js.org/) - Discord API library
- [Poru](https://github.com/parasop/poru) - LavaLink client
- [LavaLink](https://github.com/lavalink-devs/Lavalink) - Audio delivery server
- [Sequelize](https://sequelize.org/) - Database ORM

### Special Thanks
- AeroX Development community for testing and feedback
- All contributors who helped improve this project

---



## 📄 License

This project is licensed under the ISC License.

---

## ⚠️ Disclaimer

This bot is for educational and entertainment purposes. Please respect copyright laws and Discord's Terms of Service when using this bot.


