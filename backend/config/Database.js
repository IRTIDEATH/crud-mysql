import { Sequelize } from "sequelize";

const db = new Sequelize ('reactcrud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;