//DATABASE
const db = require('diskdb');
db.connect('./data', ['users'])

if (!db.users.find().length) {
    const users = [{
        "Nombre": "Javi",
        "Apellido": "Villarreal",
        "Nick": "javincius",
        "Email": "javivi@gmail.com",
        "Contraseña": "javi"
    },{
        "Nombre": "Vicente",
        "Apellido": "Villarreal",
        "Nick": "vicensius",
        "Email": "vicen@gmail.com",
        "Contraseña": "vicente"
    }];
    db.users.save(users);
 }

 module.exports = db