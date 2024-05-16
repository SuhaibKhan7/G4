const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://singup:oezvKnvAszgic2R6@cluster67376.kmci2em.mongodb.net/');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



const Userschema = new mongoose.Schema({
    name: String
});
const newUser = mongoose.model('newuser', Userschema);


const server = express();


server.use(express.static(path.join(__dirname, 'build')));

// app.use(express.static('public'))

server.use(cors())
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
server.get('/signup', (req, res) => {
    res.json({ username: 'dileep' });
    console.log('**');
});
server.post('/signup', (req, res) => {

    const user = new newUser();
    user.name = req.body.username


    console.log('post method')
    console.log(req.body)
    res.json(req.body.username);
    user.save();

})

server.post('/login', async (req, res) => {
    const { username } = req.body;

    try {
        // Query the database for a user with the provided username
        const user = await newUser.findOne({ name: username });

        // If a user with the provided username exists, consider it a successful login
        if (user) {
            return res.json({ message: 'Login successful', user });
        } else {
            return res.status(401).json({ message: 'Invalid username' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});









server.listen(4000, () => {
    console.log('server started')
})