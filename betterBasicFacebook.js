var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username:"ingrid",
		password: "777"
	}
];

var newsFeed = [
	{
		username: "bobby",
		timeline: "so tired"
	},
	{
		username: "sally",
		timeline: "js is cool"
	}
];




function isUserValid(username, password){
	for (var i=0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	}
	return false;
}
function signIn(username, password) {
	if (isUserValid(username,password)){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("what's your password?");

signIn(userNamePrompt, passwordPrompt);