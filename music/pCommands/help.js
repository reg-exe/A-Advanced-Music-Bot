const { ContainerBuilder, TextDisplayBuilder, SeparatorBuilder, SeparatorSpacingSize, StringSelectMenuBuilder, ActionRowBuilder, MessageFlags, ComponentType, MediaGalleryBuilder, MediaGalleryItemBuilder } = require('discord.js');

const categories = {
    playback: {
        name: 'Music PlayBack',
        emoji: '<:white_musicnote:1433778565115150387>',
        commands: [
            { name: 'play', description: 'Play a song or add it to the queue' },
            { name: 'pause', description: 'Pause the currently playing song' },
            { name: 'resume', description: 'Resume the paused song' },
            { name: 'skip', description: 'Skip the current song' },
            { name: 'back', description: 'Play the previous song' },
            { name: 'stop', description: 'Stop music and clear the queue' },
            { name: 'disconnect', description: 'Disconnect the bot from voice channel' },
            { name: 'nowplaying', description: 'Show the currently playing song' },
            { name: 'forward', description: 'Skip forward in the current song' },
            { name: 'backward', description: 'Skip backward in the current song' }
        ]
    },
    queue: {
        name: 'Queue Management',
        emoji: '<:queue:1433778524573007902>',
        commands: [
            { name: 'queue', description: 'Show the current song queue' },
            { name: 'shuffle', description: 'Shuffle the queue order' },
            { name: 'clear', description: 'Clear the current queue' },
            { name: 'remove', description: 'Remove a song from queue' },
            { name: 'move', description: 'Move a track to a different position in the queue' }
        ]
    },
    favorites: {
        name: 'Favourites',
        emoji: '<:favourite:1433778498022932530>',
        commands: [
            { name: 'fav add', description: 'Add a song to your favorites' },
            { name: 'fav list', description: 'Show your favorite songs' },
            { name: 'fav play', description: 'Play all songs from your favorites' },
            { name: 'fav remove', description: 'Remove a song from your favorites' }
        ]
    },
    playlists: {
        name: 'Playlists',
        emoji: '<:white_playlist:1433778573000441961>',
        commands: [
            { name: 'pl create', description: 'Create a new empty playlist' },
            { name: 'pl save', description: 'Save the current queue as a playlist' },
            { name: 'pl load', description: 'Clear the queue and load a playlist' },
            { name: 'pl append', description: 'Add songs from a playlist to the current queue' },
            { name: 'pl list', description: 'Show all of your saved playlists' },
            { name: 'pl delete', description: 'Delete one of your playlists' },
            { name: 'pl rename', description: 'Rename one of your playlists' },
            { name: 'pl share', description: 'Share a playlist with others' },
            { name: 'pl import', description: 'Import playlist from share code or Spotify URL' },
            { name: 'pl track add', description: 'Add a single song to one of your playlists' },
            { name: 'pl track list', description: 'Show the list of tracks in a playlist' },
            { name: 'pl track remove', description: 'Remove a track from one of your playlists' }
        ]
    },
    settings: {
        name: 'Settings & Filters',
        emoji: '<:filter:1433778500011036672>',
        commands: [
            { name: 'filter', description: 'Apply audio filter (equalizer)' },
            { name: 'loop', description: 'Set repeat mode' },
            { name: 'autoplay', description: 'Enable or disable autoplay' },
            { name: 'volume', description: 'Set music volume' },
            { name: 'seek', description: 'Seek to a specific time in the current song' }
        ]
    },
    info: {
        name: 'Information',
        emoji: '<:white_info:1433778557108228188>',
        commands: [
            { name: 'lyrics', description: 'Show the lyrics of the currently playing song' },
            { name: 'ping', description: 'Check the bot\'s latency' },
            { name: 'stats', description: 'Show bot statistics and information' },
            { name: 'help', description: 'Show this help menu' }
        ]
    },
    noprefix: {
        name: 'No-Prefix',
        emoji: '<:white_globe:1433778555015270450>',
        commands: [
            { name: 'np add', description: 'Grant no-prefix access to a user (Owner only)' },
            { name: 'np remove', description: 'Revoke no-prefix access from a user (Owner only)' },
            { name: 'np list', description: 'List all users with no-prefix access (Owner only)' }
        ]
    }
};

function createHelpContainer(categoryKey = null) {
    const container = new ContainerBuilder();

    if (!categoryKey) {
        container
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# <:A_:1433778486358835230> A! Music Help`)
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent('Select a category from the menu below to view available commands.')
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true));

        const categoryList = Object.values(categories).map(cat => 
            `${cat.emoji} **${cat.name}**`
        ).join('\n');
        
        container.addTextDisplayComponents(
            new TextDisplayBuilder().setContent(categoryList)
        );
    } else {
        const category = categories[categoryKey];
        if (!category) return container;

        container
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${category.emoji} ${category.name}`)
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true));

        const commandList = category.commands.map(cmd => 
            `**${cmd.name}**\n<:reply:1433778526670291116> ${cmd.description}`
        ).join('\n');
        
        container.addTextDisplayComponents(
            new TextDisplayBuilder().setContent(commandList)
        );
    }

    container
        .addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems([new MediaGalleryItemBuilder().setURL('https://cdn.discordapp.com/attachments/1414256332592254986/1430798331524808724/standard_2.gif')])
        )
        .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true));

    return container;
}

function createSelectMenu(currentCategory = null) {
    const selectMenu = new StringSelectMenuBuilder()
        .setCustomId('help_category_select')
        .setPlaceholder('Select a category');

    selectMenu.addOptions({
        label: 'Home',
        description: 'Return to main help page',
        value: 'home',
        default: currentCategory === null
    });

    for (const [key, category] of Object.entries(categories)) {
        selectMenu.addOptions({
            label: category.name,
            description: `${category.commands.length} commands`,
            value: key,
            default: currentCategory === key
        });
    }

    return new ActionRowBuilder().addComponents(selectMenu);
}

module.exports = {
    name: 'help',
    description: 'Show all available commands',

    async execute(message) {
        const container = createHelpContainer();
        const selectMenuRow = createSelectMenu();

        container.addActionRowComponents(selectMenuRow);

        const reply = await message.reply({
            components: [container],
            flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2,
            fetchReply: true
        });

        const collector = reply.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            time: 300000
        });

        collector.on('collect', async (selectInteraction) => {
            if (selectInteraction.user.id !== message.author.id) {
                const errorContainer = new ContainerBuilder()
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent('Only the command user can use this menu!')
                    );
                return selectInteraction.reply({
                    components: [errorContainer],
                    flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2,
                    ephemeral: true
                });
            }

            const selectedCategory = selectInteraction.values[0];
            const newContainer = createHelpContainer(selectedCategory === 'home' ? null : selectedCategory);
            const newSelectMenu = createSelectMenu(selectedCategory === 'home' ? null : selectedCategory);

            newContainer.addActionRowComponents(newSelectMenu);

            await selectInteraction.update({
                components: [newContainer],
                flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2
            });
        });
    }
};


