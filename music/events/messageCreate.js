
const {
  Events,
  ContainerBuilder,
  TextDisplayBuilder,
  SeparatorBuilder,
  MessageFlags,
  MediaGalleryBuilder,
  MediaGalleryItemBuilder,
  SeparatorSpacingSize,
} = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message, client) {
    if (message.author.bot) return;
    if (!message.guild) return;
    
    
    if (!message.mentions.users.has(client.user.id)) return;
    if (message.type === 19) return; 
    
    const container = new ContainerBuilder();
    
    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `# <:A_:1433778486358835230> Hey there!\n\n<:dots:1433778494457778289> I'm **${client.user.username}** - Your music companion\n<:dots:1433778494457778289> Use \`/help\` to explore all my commands\n<:dots:1433778494457778289> Need support? Join our [server](https://discord.gg/ghDpckYVgV)`
      )
    );
    
    container.addSeparatorComponents(new SeparatorBuilder());
    
    container.addMediaGalleryComponents(
      new MediaGalleryBuilder().addItems(
        new MediaGalleryItemBuilder().setURL(
          "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFtaWxwM3pwaTU0cDVpa3ZldmxkYmxoOTVhMnd5dW1kd3BwMmJsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d4r07CNyqvWNh1BERN/giphy.gif"
        )
      )
    );
    
    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );
    
    await message.reply({
      components: [container],
      flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2,
    });
  },
};


