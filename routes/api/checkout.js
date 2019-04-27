// const Delivery = require('../../models/delivery');
// const CarryOut = require('../../models/carryOut');

// module.exports = (app) => {
// // app.post('/delivery', (req, res, next) => {
// //     const { body } = req;
// //     let {
// //         name,
// //         address,
// //         phone,
// //         email
// //     } = body;

// //     if(!name) {
// //         return res.send({
// //             success: false,
// //             message: "Name cannot be blank"
// //         });
// //     }
// //     if(!address) {
// //         return res.send({
// //             success: false,
// //             message: "Address cannot be blank"
// //         });
// //     }
// //     if(!phone) {
// //         return res.send({
// //             success: false,
// //             message: "Phone cannot be blank"
// //         });
// //     }
// //     if(!email) {
// //         return res.send({
// //             success: false,
// //             message: "Email cannot be blank"
// //         });
// //     }
// //     email = email.toLowerCase();

// //     const newDelivery = new Delivery(); 
// //     newDelivery.name = name;
// //     newDelivery.address = address;
// //     newDelivery.phone = phone;
// //     newDelivery.email = email;
// //     newDelivery.save((err, delivery) => {
// //         if (err) {
// //         //     res.end({
// //         //         success: false,
// //         //         message: 'ERROR: Server'
// //         //     });
// //         // }
// //         //     res.end({
// //         //         success: true,
// //         //         message: 'Delivery Success'
// //         //     });
// //     }});
// //     });
// app.post('/carryout'), (req, res, next) => {
//     const { body } = req;
//     let {
//         name,
//         phone,
//         email
//     } = body;
//     console.log(name)
//     console.log(phone)
//     console.log(email)



//     if(!name) {
//         return res.send({
//             success: false,
//             message: "Name cannot be blank"
//         });
//     }
//     if(!phone) {
//         return res.send({
//             success: false,
//             message: "Phone cannot be blank"
//         });
//     }
//     if(!email) {
//         return res.send({
//             success: false,
//             message: "Email cannot be blank"
//         });
//     }
//     email = email.toLowerCase();


//         const newCarryOut = new CarryOut();
//         newCarryOut.name = name;
//         console.log("^^^^^^^^^^^^^^^^")        
//         newCarryOut.phone = phone;
//         console.log("----------------")
//         newCarryOut.email = email;
//         console.log("%%%%%%%%%%%%%%%%")
//         newCarryOut.save((err, carryOut) => {
//             if (err) {
//             //     res.end({
//             //         success: false,
//             //         message: 'ERROR: Server'
//             //     });
//             // }
//             // res.end({
//             //     success: true,
//             //     message: 'Carry Out Success'
//             // });
//         }});
//     };
// };

