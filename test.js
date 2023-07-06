const { MongoClient } = require('mongodb');

const MongoDBclient = new MongoClient('mongodb://Timeweb:cloud@127.0.0.1:27017/?authMechanism=DEFAULT');

const connect = async () => {
    try {
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        await MongoDBclient.close()
        console.log("Закрыли подключение")
    } catch (e) {
        console.log(e)
    }
}

connect()