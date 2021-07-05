var database = [
	{
		username: "andrei",
		password: "supersecret"
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

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("what's your password?");

function signIn(user, pass){
	if (user === database[0].username && password === database[0].password)
	{
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

signIn(userNamePrompt, passwordPrompt);