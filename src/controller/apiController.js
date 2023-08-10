import pool from '../configs/connectDB';

let getAllUsers = async(req,res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.status(200).json({
        message : 'oke',
        data: rows
    })
    
}

let createNewUser = async(req, res) => {
    let {Firstname, Lastname, Address, email } = req.body;

    if(!Firstname || !Lastname || !Address || !email){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
        await pool.execute('insert into users(Firstname, Lastname, Address, email) values(?,?,?,?)',
        [Firstname, Lastname, Address, email] );

    return res.status(200).json({
        message: 'oke'
    })
} 
let updateUser = async(req,res) => {
        let {Firstname, Lastname, Address, email, Id } = req.body;
        if(!Firstname || !Lastname || !Address || !email || !Id){
            return res.status(200).json({
                message: 'missing required params'
            })
        }
        
            await pool.execute('update users set Firstname = ?, Lastname = ?, email = ?, address = ? where Id = ?',
            [Firstname, Lastname, email, Address, Id]);

    return res.status(200).json({
        message: 'oke'
    })
}
let deleteUser = async(req,res) => {
    let userID = req.params.Id;
    if(!userID){
        return res.status(200).json({
            message: 'missing required params'
        })
    }
        await pool.execute('delete from users where id = ?', [userID])
        return res.status(200).json({
            message: 'oke'
})
}

module.exports = {
    getAllUsers,createNewUser, updateUser, deleteUser
}
