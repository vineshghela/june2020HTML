

localStorage.setItem("userName","vineshg");
localStorage.setItem("email","vinesh.ghela@qa.com");

console.log(localStorage.getItem("email"));

localStorage.removeItem("email");

sessionStorage.setItem("key","value");
sessionStorage.setItem("authLogin", "4739DBF1AD62D0A7011F6D34C2D3F010EE4060073CE8614A060DF24DA5FFB292")

console.log(sessionStorage.getItem("authLogin"));



sessionStorage.clear();