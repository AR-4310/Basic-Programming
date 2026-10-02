const email = "adnanraad2002@gmail.com";

var name = email.slice(0, email.indexOf("@"));
var domain = email.slice(email.indexOf("@")+1);

console.log("Name: " + name);
console.log("Domain: " + domain);