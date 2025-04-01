export class Actions {
    static visitURL(url) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (url.startsWith('www') || url.startsWith('https://')) resolve ('URL visited successfully')
                else reject('Wrong URL')
            }, 1000)
        })
    }
    static login(username, password) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if((username = 'TechGlobal') && (password = 'Test1234')) resolve('Logged in successfully')
                else reject('Wrong credentials')
            }, 3000)
        })
    }
    static validateTitle(title) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (title) resolve('Title validated successfully')
                else reject('Wrong title')
            }, 3000)
        })
    }
}


