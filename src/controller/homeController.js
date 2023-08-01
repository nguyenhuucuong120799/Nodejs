import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    //logic
    let statement = 'SELECT * FROM users';
    let datas = [];
    connection.query(statement, (err, results) => {
        if(results){
            console.log(results); // results contains rows returned by server
            datas = results.map((element) => { return element });
            console.log(datas.TextRow[0]); 
        }
        else if(err){
            console.log(err);
        }
    });
    console.log(datas);
    return res.render('test/index.ejs', { user: JSON.stringify(datas) });
    // return res;
}

module.exports = {
    getHomepage
}