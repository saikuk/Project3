const User = require('../../models/user')

module.exports = (app) => {
    
    // app.post('/signup', (req, res, next) => {
    //     console.log("testing")
    //     const { body } = req;
    //     const {
    //         firstName,
    //         lastName,
    //         password,
    //         email
    //     } = body;

    //     if(!firstName) {
    //         return res.send({
    //             success: false,
    //             message: "First name cannot be blank"
    //         });
    //     }
    //     if(!lastName) {
    //         return res.send({
    //             success: false,
    //             message: "Last name cannot be blank"
    //         });
    //     }
    //     if(!email) {
    //         return res.send({
    //             success: false,
    //             message: "Email cannot be blank"
    //         });
    //     }
    //     if(!password) {
    //         return res.send({
    //             success: false,
    //             message: "Password cannot be blank"
    //         });
    //     }
    //     email = email.toLowerCase();

    //     const newUser = new User();
    //     newUser.email = email;
    //     newUser.firstName = firstName;
    //     newUser.lastName = lastName;
    //     newUser.password = newUser.generateHash(password);
    //     newUser.save((err, user) => {
    //         if (err) {
    //             res.end({
    //                 success: false,
    //                 message: 'ERROR: Server'
    //             });
    //         }
    //         res.end({
    //             success: true,
    //             message: 'Signed Up'
    //         });
    //     });
    // });
}