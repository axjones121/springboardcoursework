"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""

    # ADD THE NECESSARY CODE HERE
    __tablename__ = 'playlists'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    name = db.Column(db.String(30),  # maximum length
                     nullable=False,
                     unique=True)

    description = db.Column(db.String(100),
                            nullable=False,
                            unique=True)

    # songs = db.relationship('Song', backref='playlists')


class Song(db.Model):
    """Song."""

    # ADD THE NECESSARY CODE HERE
    __tablename__ = 'songs'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    title = db.Column(db.String(30),
                      nullable=False,
                      unique=True)

    artist = db.Column(db.String(30),
                       nullable=False,
                       unique=True)


class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""

    # ADD THE NECESSARY CODE HERE
    __tablename__ = 'playlists_songs'

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'))

    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'))


# DO NOT MODIFY THIS FUNCTION
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
