const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
6
const app = express();

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'secret_key_kiran',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kiran@123', 
  database: 'authdb'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Routes
app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/dashboard');
  } else {
    res.render('login', { error: null });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.render('login', { error: 'User not found' });
    }

    const match = await bcrypt.compare(password, results[0].password);
    if (match) {
      req.session.user = results[0].username;
      res.redirect('/dashboard');
    } else {
      res.render('login', { error: 'Incorrect password' });
    }
  });
});

// GET Register Page
app.get('/register', (req, res) => {
  res.render('register', { error: null });
});

// POST Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);

  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPwd], (err) => {
    if (err) {
      return res.render('register', { error: 'Username already taken or database error' });
    }
    res.redirect('/');
  });
});


app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.render('dashboard', { username: req.session.user });
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
