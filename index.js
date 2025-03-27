const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "somerandomgiberish";
const app = express();
app.use(express.json());

const users = [];

app.post('/signup', function (req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: "Username already exists" });
    }

    users.push({ username, password, token: null });

    return res.status(201).json({ message: "You're signed up" });
});

app.post('/signin', function (req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    // Find user
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (!foundUser) {
        return res.status(403).json({ message: "Invalid username or password" });
    }

    // Generate token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    foundUser.token = token;

    return res.status(200).json({ message: "Signed in successfully", token });
});

app.listen(3000, () => console.log("Server running on port 3000"));
