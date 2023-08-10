import mysql from 'mysql2/promise';

// create the connection to database
console.log("Creating connection pool");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejsbasic'
});

// connection.connect((error) => {
//     if(error){
//         throw error
//     }
//     else{
//         console.log('Connected!!!');
//     }
// })


export default pool;