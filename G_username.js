
document.getElementById("theButton").addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var display = document.getElementById("display");
//display.innerHTML = username;
var url = "https://api.github.com/users/" + username;
$.ajax({
       type : 'GET',
       url: url,
       headers: {"Authorization": "token <GITHUB_TOKEN_HERE>"}
   })
   .then(function(result){
    var message = "Hi, " + username + " you have " + result.public_repos + " repos in GitHub!"
      display.innerHTML = message;
  });
});
