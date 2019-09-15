class ReadImg {
    constructor (fileName) {
        this.fileName = fileName
        this.loadFromDisk()
    }
    loadFromDisk () {
        console.log('loading... ' + this.fileName)
    }
    display () {
        console.log('display... ' + this.fileName)
    }
}

class ProxyImg {
    constructor (fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display () {
        this.realImg.display()
    }
}

let proxyImg = new ProxyImg('a.png')
proxyImg.display