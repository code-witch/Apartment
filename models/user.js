class User {
    constructor(username, nickname = '', picture = '', email, password, followers = [], following = []) {
        this.username = username;
        this.nickname = nickname;
        this.picture = picture;
        this.email = email;
        this.password = password;
        this.followers = followers;
        this.following = following;
    }
}

exports.User = User;