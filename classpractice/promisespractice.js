function connectToServer() {
    return new Promise((resolve, reject) => {
        const serverUp = false
        if(serverUp) resolve('Server connection is complete')
        else reject('ERR: SERVER IS DOWN')
    })
}

connectToServer()
    .then((data) => {
        console.log(data)
    }) //Resolve case err handling
    .catch((failure) => {
        console.log(failure)
    }) //Reject case 

function connectToDB() {
    return new Promise((resolve, reject) => {
        const dbUP = true
        setTimeout(() => {
            if(dbUP) resolve ('DB is up')
            else reject('ERROR: DB is down')
        }, 1500)
    })
}

function getData() {
    return new Promise((resolve, reject) => {
        const dataAvailable = true
        setTimeout(() => {
            if(dataAvailable) resolve ('DB Data is here')
            else reject('ERROR: DB Data not found')
        }, 1500)
    })
}

function useData() {
    return new Promise((resolve, reject) => {
        const usingData = true
        setTimeout(() => {
            if(usingData) resolve ('Data is used ')
            else reject('ERROR: Data isn\'t used')
        }, 500)
    })
}


function test2 () {
    connectToDB()
    .then(() => getData())
    .then(() => useData())
    .catch(err => console.log(err))
}

test2()


function test1() {
    connectToDB()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

test1()


async function test3() {
try {
    await connectToDB()
    await getData()
    await useData()
    }
catch(err) {
    console.log(err)
    }
}