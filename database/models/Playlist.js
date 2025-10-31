

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const BaseModel = require('../BaseModel');

class Playlist extends BaseModel {
    static init(sequelize) {
        super.init(
            {
                id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
                userId: { type: DataTypes.STRING, allowNull: false, comment: 'Discord User ID of the playlist owner.' },
                name: { type: DataTypes.STRING, allowNull: false, comment: 'Name of the playlist.' },
                shareCode: { type: DataTypes.STRING, allowNull: true, unique: true, comment: 'Unique code for sharing this playlist.' },
            },
            {
                sequelize,
                modelName: 'Playlist',
                tableName: 'playlists',
                timestamps: true,
            }
        );

        return this;
    }

    static associate(models) {
        this.hasMany(models.PlaylistTrack, {
            foreignKey: 'playlistId',
            as: 'tracks',
            onDelete: 'CASCADE',
        });
    }
}

Playlist.init(sequelize);

module.exports = Playlist;


