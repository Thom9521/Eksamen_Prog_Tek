//Dato og tid
var date = new Date();
document.getElementById("date").innerHTML = date;

//Cookie
//Function som finder cookie efter navn
function findCookieContent(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
  var getCookie = findCookieContent("visitcount");
  //Hvis cookie med navnet "visitcount" ikke findes så sættes en cookie med indholdet 1
  if (!getCookie) { document.cookie = "visitcount=" + 1 + ";"; }
  //Hvis det findes så bliver indholdet plusset med 1
  else {
    var visitcount = findCookieContent("visitcount");
    var visistcountAdd = (Number(visitcount) + 1);
    document.cookie = "visitcount=" + visistcountAdd + ";"
  }

  //Valuta API
  function getValuta() {
      //xmlhttp object bliver brugt til at request data fra en webserver
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            document.getElementById("citat").innerHTML = myObj;
        }
    };
    xmlhttp.open("GET", "https://api.cryptonator.com/api/ticker/btc-eur", true);
    xmlhttp.send();
}

//Dummy Login
function check(form) {
    if (form.userid.value == "admin" && form.password.value == "123"
      || form.userid.value == "Admin" && form.password.value == "123") {
      window.location.replace('/')
    }
    else {
      alert("Forkert brugernavn eller kodeord ")
    }
  }
