import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {

        const [rows, fields] = await pool.execute('SELECT * FROM users');
        
        
        return res.render('index.ejs', {dataUser: rows})

    }
    let getDetailPage = async (req,res) => {
        let userId = req.params.id;       
        let [user] = await pool.execute(`select * from users where id = ?`,[userId]);

        return res.send(JSON.stringify(user))
    }
    let createNewUser =async (req,res) => {
        
        let {Firstname, Lastname, Address, email } = req.body;
        await pool.execute('insert into users(Firstname, Lastname, Address, email) values(?,?,?,?)',
        [Firstname, Lastname, Address, email] )
        return res.redirect('/')
        
    }

module.exports = {
    getHomepage, getDetailPage, createNewUser
} 