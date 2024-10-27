import { createConnection } from 'mysql2';
import { promisify } from 'util';
import { configDotenv } from 'dotenv'

configDotenv()
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME;
const DATABASE_NAME = 'attendify';

const connection = createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: DATABASE_NAME,
});
connection.connect(function (err) {
    if (err) {
        console.log(`[DATABASE ERROR] Cannot connect to  ${DATABASE_NAME}`);
        console.error(err);
    }
});
const query = promisify(connection.query).bind(connection);

export { query, connection };
