class Library {
    constructor(username, collection = []) {
        this.username = username;
        this.collection = collection;
    }
}

class Collection {
    constructor (title, publisher, artist = '',author = '', language = 'English',
        genre = [], ageRating = 0, completed = false, totalVolumes = 1, hasAnime = false, visibility = 'public', books = []) {
    // maybe change language/visibility into enums
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


module.exports = {
    Library,
    Collection,
    Book

}