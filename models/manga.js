
// this may be redundent if adding to username to collection then library isnt needed?
class Library {
    constructor(username, collection = []) {
        this.username = username;
        this.collection = collection;
    }
}

class Collection {
    constructor (title, publisher, artist = '',author = '', language = Language.ENGLISH,
        genre = [], ageRating = 0, completed = false, totalVolumes = 1, hasAnime = false, visibility = Visibility.PUBLIC, books = []) {
            this.title = title;
            this.publisher = publisher;
            this.artist = artist;
            this.author = author;
            this.language = language;
            this.genre = genre;
            this.ageRating = ageRating;
            this.completed = completed;
            this.totalVolumes = totalVolumes;
            this.hasAnime = hasAnime;
            this.visibility = visibility;
            this.books = books;
    }
}

class Book {
    constructor(title, volume = 1, collected = false, finished = false, review = 0) {
        this.title = title;
        this.volume = volume;
        this.collected = collected;
        this.finished = finished;
        this.review = review;
    }
}

// idk if i want to use the symbol thing

const Language = {
    ENGLISH: Symbol('English'),
    JAPANESE: Symbol('Japanese')
}

const Visibility = {
    PUBLIC: Symbol('Public'), // everyone
    PRIVATE: Symbol('Private'), // only you
    MUTUALS: Symbol('Mutuals'), // just a combo of following & followers
    FOLLOWING: Symbol('Following'), // dont know about this
    FOLLOWERS: Symbol('Followers'), // dont know about this
}

module.exports = {
    Library,
    Collection,
    Book,
    Language,
    Visibility,

}