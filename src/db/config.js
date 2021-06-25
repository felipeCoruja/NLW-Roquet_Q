const sqlite3 = require("sqlite3"); // importando o sqlite3
const  { open } = require("sqlite")// importando apenas o open do sqlite

module.exports = () => 
    open({ //função que abre a conexão com Banco de Dados
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
     });