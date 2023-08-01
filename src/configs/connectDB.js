import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejsbasic'
});

connection.connect((error) => {
    if(error){
        throw error
    }
    else{
        console.log('Connected!!!');
    }
})


export default connection;