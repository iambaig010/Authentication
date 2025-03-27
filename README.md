# Basic Authentication & JWT Token Explained


Imagine you go to a bank to withdraw money. The bank needs to verify your identity before giving you access to your account. This verification process is similar to authentication in software systems.

1. Basic Authentication
How it Works:
You go to the bank and show your passbook & password to the cashier.
Every time you visit, you have to enter your password again to prove who you are.

Explanation:
In Basic Authentication, when a user logs in, they send their username and password in the request.
The server checks if they are correct and then allows access.
However, the user has to send their username and password every time they make a request, which is not secure.

For Example 
You visit SBI Bank and want to access your account. You enter your username & password on the SBI Net Banking website.
Every time you make a transaction, you must enter your password again.

 Problem? If someone intercepts your request, they can steal your password!

2. JWT (JSON Web Token) Authentication

How it Works:
You visit the bank and show your Aadhaar Card once. The bank gives you a special token (like a visitor pass) that lets you access your account without showing your Aadhaar every time.
This token is valid for a specific time (e.g., 1 hour) and expires after that.

Explanation:
Instead of sending the username & password every time, the server gives a JWT Token when you log in. This token is a digital signature that proves who you are.
You send this token with every request instead of your password. The server verifies the token and allows access without needing your password again.

Example:
You log in to SBI Net Banking with your username & password.

The bank's server gives you a JWT token that allows you to stay logged in for 30 minutes.

When you transfer money or check your balance, your token is verified instead of asking for your password.

After 30 minutes, the token expires, and you need to log in again for a new token.

Advantage? Even if someone steals your token, they can’t use it after it expires!

