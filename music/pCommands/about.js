const { 
  ContainerBuilder, 
  TextDisplayBuilder,
  SeparatorBuilder,
  MediaGalleryBuilder,
  MediaGalleryItemBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  MessageFlags,
  SeparatorSpacingSize
} = require("discord.js");

module.exports = {
  name: 'about',
  description: 'Shows information about A! Music',
  
  async execute(message) {
    const client = message.client;
    const container = new ContainerBuilder();

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `# <:A_:1433778486358835230> About A! Music`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `<:white_musicnote:1433778565115150387> **A! Music** - A powerful Discord music bot designed to bring high-quality music streaming to your server. Enjoy seamless playback, custom playlists, and a rich set of features to enhance your listening experience.`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Key Features**\n<:reply:1433778526670291116> High-quality music streaming\n<:reply:1433778526670291116> Custom playlists & favorites\n<:reply:1433778526670291116> Advanced audio filters\n<:reply:1433778526670291116> Queue management\n<:reply:1433778526670291116> Lyrics support\n<:reply:1433778526670291116> Spotify integration`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Built With**\n<:dots:1433778494457778289> Discord.js v14\n<:dots:1433778494457778289> Node.js\n<:dots:1433778494457778289> Lavalink\n<:dots:1433778494457778289> SQLite Database`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addMediaGalleryComponents(
      new MediaGalleryBuilder().addItems(
        new MediaGalleryItemBuilder().setURL("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFtaWxwM3pwaTU0cDVpa3ZldmxkYmxoOTVhMnd5dW1kd3BwMmJsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d4r07CNyqvWNh1BERN/giphy.gif")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `*Developed with ❤️ by A! Development*`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addActionRowComponents(
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=303600576574&scope=bot%20applications.commands`)
          .setLabel(`Invite Bot`)
          .setStyle(ButtonStyle.Link),

        new ButtonBuilder()
          .setURL(`https://discord.gg/aerox`)
          .setLabel(`AeroX Development`)
          .setStyle(ButtonStyle.Link)
      )
    );

    await message.reply({
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    });
  }
};
