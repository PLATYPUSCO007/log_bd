const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const DB = require('./db');

let store = new MongoStore({
    mongooseConnection: DB,
    collection: 'sessions'
});

store.session = session({
    cookie: {},
    store: store,
    saveUninitialized: true,
    resave: true,
    secret: 'SD24351#"$ASDF"!#!F'
});


module.exports = store;