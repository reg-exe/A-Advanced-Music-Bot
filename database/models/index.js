

const sequelize = require('../sequelize');
const Favorite = require('./Favorite');
const Playlist = require('./Playlist');
const PlaylistTrack = require('./PlaylistTrack');
const NoPrefix = require('./NoPrefix');


const models = {
    Favorite,
    Playlist,
    PlaylistTrack,
    NoPrefix,
    sequelize
};


Object.values(models).forEach(model => {
    if (model.associate && typeof model.associate === 'function') {
        model.associate(models);
    }
});



sequelize.sync({ alter: false }).catch(() => {
    
});

module.exports = models;


