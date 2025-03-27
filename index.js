const express = require("express");

const app = express();
app.use(express.json());

const users = [];

function generateToken(){
    let options = ['a','b','c','d','e','f','g','h','i','j',
        'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F',
        'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V',
        'W','X','Y','Z'];

        let token ='';
        for(let i=0; i<32; i++){
            token += options[Math.floor(Math.random()*options.length)];
        }
        return token;
}

app.post('/signup', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)){
        return res.json({
            message: "username already exists"
        })
    }

    users.push({
        username: username,
        password: password,
        token: null
    })

    res.json({
        message: "youre signed up"
    })
})

app.post('/signin', function (req, res) {
    const { username, password } = req.body;

    // Find user
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (!foundUser) {
        return res.status(403).json({ message: "Invalid username or password" });
    }

    // Generate token
    const token = generateToken();
    foundUser.token = token; // Assign token to the user

    res.json({ message: "Signed in successfully", token });
});




app.listen(3000);