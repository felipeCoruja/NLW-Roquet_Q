const Database = require("./config") // importando arquivo config

const initDb = {
    async init(){//async e await são comandos que andão sempre juntos
        const db =  await Database()// o awaint é para que o javaScript espere até que o comando seguinte termine para avançar, no caso para esperar que o Database() rode

        await db.exec(`CREATE TABLE rooms (
                    id INTEGER PRIMARY KEY,
                    pass TEXT
                )`);

        await db.exec(`CREATE TABLE question(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    read INT,
                    room INT 
                )`);

        await db.close()
    } 

    
    
}

initDb.init();