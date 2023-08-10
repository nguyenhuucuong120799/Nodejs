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

    let deleteUser = async (req,res) => {
        let userID = req.body.userId;
        await pool.execute('delete from users where id = ?', [userID])
        return res.redirect('/');
    }
    let getEditPage = async(req,res) => {
        let id = req.params.id
        let [user] = await pool.execute('select * from users where id = ?', [id]);
       return res.render('update.ejs',{dataUser: user[0]}); //x <- y
    }

    let postUpdateUser = async(req, res) =>{

        let {Firstname, Lastname, Address, email, Id } = req.body;
        await pool.execute('update users set Firstname = ?, Lastname = ?, email = ?, address = ? where Id = ?',
        [Firstname, Lastname, email, Address, Id]);

        return res.redirect('/');
    }
    let getUploadFilePage = async(req,res) => {
        return res.render('uploadFile.ejs')
    }
    let handleUploadFile = async(req,res) => {
        
    }

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser, getUploadFilePage, handleUploadFile
} 