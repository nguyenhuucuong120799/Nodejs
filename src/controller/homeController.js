import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    Id: row.Id,
                    email: row.email,
                    address: row.address,
                    Firstname: row.Firstname,
                    Lastname: row.Lastname  
})
            });
            return res.render('index.ejs', {dataUser: data})
        })
    }

module.exports = {
    getHomepage
} 