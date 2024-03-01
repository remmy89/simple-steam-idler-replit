const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')


var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.secret;

var games = [203770, 1568590, 1454400, 477160, 304930, 4000, 863550, 218620, 1353300, 1818750, 114420, 883710, 397540, 817130, 620, 633230, 271590];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({ "accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret) });
user.on('loggedOn', () => {
  if (user.steamID != null) console.log('Successfully logged on');
  user.setPersona(status);
  user.gamesPlayed(games);
});
