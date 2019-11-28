var dnd = (function () {
  // form 
  var charName = document.getElementById("CHAR");
  var player = document.getElementById("PLAYER");
  var classType = document.getElementById("CLASSS");
  var lvl = document.getElementById("LVL");
  var race = document.getElementById("RACE");
  var age = document.getElementById("AGE");
  var gender = document.getElementById("GENDER");

  // stats 
  var strength = 10;
  var dexterity = 10;
  var constitution = 10;
  var intellect = 10;
  var wisdom = 10;
  var charisma = 10;


  var setAllDefaults = function () {
    charName.value = "";
    player.value = "";
    classType.value = "";
    lvl.value = "";
    race.value = "";
    age.value = "";
    gender.value = "";
    strength = 10;
    dexterity = 10;
    constitution = 10;
    intellect = 10;
    wisdom = 10;
    charisma = 10;
    displayAttributes();
  }

  var image = document.querySelector("#portrait")

  var numberOfImages = 2;
  var img = new Array(numberOfImages);
  var imgNumber = 0;

  var humanMale = "pictures/male/humanmale01.png";
  var humanFemale = "pictures/female/humanfemale01.png"
  var halfelfFemale = "pictures/female/halfelffemale01.png";
  var halfelfMale = "pictures/male/halfelfmale01.png";
  var elfFemale= "pictures/female/elffemale01.png";
  var elfMale = "pictures/male/elfmale01.png";
  var halflingFemale = "pictures/female/halflingfemale01.png";
  var halflingMale = "pictures/male/halflingmale01.png";
  var dwarfFemale = "pictures/female/dwarffemale01.png";
  var dwarfMale = "pictures/male/dwarfmale01.png";
  var gnomeFemale = "pictures/female/gnomefemale01.png";
  var gnomeMale = "pictures/male/gnomemale01.png";
  var halforcFemale = "pictures/female/halforcfemale01.png";
  var halforcMale = "pictures/male/halforcmale01.png";
  var drowFemale = "pictures/female/drowfemale01.png";
  var drowMale = "pictures/male/drowmale01.png";



  var displayAttributes = function() {
    document.getElementById("STR").innerHTML = strength;
    document.getElementById("DEX").innerHTML = dexterity;
    document.getElementById("CON").innerHTML = constitution;
    document.getElementById("INT").innerHTML = intellect;
    document.getElementById("WIS").innerHTML = wisdom;
    document.getElementById("CHA").innerHTML = charisma;
  }

//login
var loginemail = document.getElementById("Email");
var loginfrist = document.getElementById("Fname");
var loginlast = document.getElementById("Lname");
var loginpass = document.getElementById("Pass");
//create new
var newFname = document.getElementById("newFname");
var newLname = document.getElementById("newLname");
var newemail = document.getElementById("newEmail");
var newpass = document.getElementById("newPass");

var encodeLogin01 = function(log){
  var email01 = encodeURIComponent(loginemail.value);
  var pass01 = encodeURIComponent(loginpass.value);
  var data01;
  if(log == true){
    data01 = "email=" + email01 + "&password=" + pass01;
    return data01;
  }else{
    fname01 = encodeURIComponent(newFname.value)
    lname01 = encodeURIComponent(newLname.value)
    email01 = encodeURIComponent(newemail.value)
    pass01 = encodeURIComponent(newpass.value)
    data01 = "fname=" + fname01 +"&lname=" + lname01 + "&email=" + email01 + "&password=" + pass01;
    return data01;
  }
}

  // encode the different variables and set = to dataString
  var encodeString = function() {
    var nameEncoded = encodeURIComponent(charName.value);
    var playerEncoded = encodeURIComponent(player.value);
    var classEncoded = encodeURIComponent(classType.value);
    var lvlEncoded = encodeURIComponent(lvl.value);
    var raceEncoded = encodeURIComponent(race.value);
    var ageEncoded = encodeURIComponent(age.value);
    var genderEncoded = encodeURIComponent(gender.value);
    var strEncoded = encodeURIComponent(strength);
    var dexEncoded = encodeURIComponent(dexterity);
    var conEncoded = encodeURIComponent(constitution);
    var intEncoded = encodeURIComponent(intellect);
    var wisEncoded = encodeURIComponent(wisdom);
    var chaEncoded = encodeURIComponent(charisma);
    var dataString = "name=" + nameEncoded + "&player=" + playerEncoded + "&classType=" + classEncoded + "&lvl=" +
    lvlEncoded + "&race=" + raceEncoded + "&age=" + ageEncoded + "&gender=" + genderEncoded + "&str=" + strEncoded +
    "&dex=" + dexEncoded + "&con=" + conEncoded + "&int=" + intEncoded + "&wis=" + wisEncoded + "&cha=" + chaEncoded;
    return dataString;
  };

  function displayData(fetchData) {
    
    var collection = document.getElementById("collectionSheet");
    var deleteButton = document.getElementById("deleteButton");
    collection.innerHTML = "";

    //icons
    var barbarianIcon = "pictures/class/barbarian.png";
    var bardIcon = "pictures/class/bard.png";
    var clericIcon = "pictures/class/cleric.png";
    var druidIcon = "pictures/class/druid.png";
    var fightIcon = "pictures/class/fighter.png";
    var monkIcon = "pictures/class/monk.png";
    var pallyIcon = "pictures/class/pally.png";
    var rangerIcon = "pictures/class/ranger.png";
    var rogueIcon = "pictures/class/rogue.png";
    var sorcIcon = "pictures/class/sorc.png";
    var warlockIcon = "pictures/class/warlock.png";
    var wizardIcon = "pictures/class/wizard.png";

    fetchData.forEach(function (fetchData) {
      var n = fetchData['lvl'];
      var p = fetchData['player'];
      var c = fetchData['classs'];
      var characterFrame = document.createElement("div");
      characterFrame.className = "characterFrame";
      var characterInfo = document.createElement("div");
      characterInfo.className = "characterInfo";
      var img = document.createElement("img");
      img.className = "imageFrame"
      img.style.backgroundColor = "black";

      if (c == "barbarian") {
        img.src = barbarianIcon;
      } 
      else if ( c == "bard") {
        img.src = bardIcon;
      } 
      else if ( c == "cleric") {
        img.src = clericIcon;
      } 
      else if ( c == "druid") {
        img.src = druidIcon;
      } 
      else if ( c == "fighter") {
        img.src = fightIcon;
      } 
      else if ( c == "monk") {
        img.src = monkIcon;
      } 
      else if ( c == "paladin") {
        img.src = pallyIcon;
      } 
      else if ( c == "ranger") {
        img.src = rangerIcon;
      } 
      else if ( c == "ranger") {
        img.src = rogueIcon;
      } 
      else if ( c == "sorcerer") {
        img.src = sorcIcon;
      } 
      else if ( c == "warlock") {
        img.src = warlockIcon;
      } 
      else {
        img.src = wizardIcon;
      }

      var charName = document.createElement("label");
      charName.className = "characterName";
      var charLvl = document.createElement("label");
      charLvl.className = "characterLvl";
      charName.innerHTML = n;
      charLvl.innerHTML = p;

      characterInfo.appendChild(charLvl);
      characterFrame.appendChild(img);
      characterFrame.appendChild(characterInfo)
      collection.appendChild(characterFrame);
      
      var deleteButton = document.getElementById("deleteButton");
      
      characterFrame.onclick = function() {
        getCharacterSheet(fetchData);
        saveButton = document.getElementById("saveButton");
        saveButton.onclick = function() {
          var saveId = saveValue;
          console.log("this is the 'updated' button and id = ", saveId);
          modal.style.display = "none";
          deleteButton.style.display = "inline-block";
          updateData(saveId);
        }
      }
    })
  };

var login = document.getElementById("Login");
var newloginstuff = document.getElementById("newuser01");
var loginAll = document.getElementById("buttonlogin");
var newuser = document.getElementById("User");
var newuser01 = document.getElementById("User01");
var back = document.querySelector("#Back");
var backbutton = document.querySelector("#back01");
var wholething = document.querySelector(".loginsystem");
var characterstuffbutton = document.querySelector("#button01");
var mod = document.querySelector("#collectionSheet");
var backfrommake = document.querySelector(".backed");


backfrommake.onclick = function(){
  modal.style.display = "none";
  create.style.display = "inline-block";
}

//login button
login.onclick = function(){
  sendLogin();
}

newuser.onclick = function(){
  back.style.display = "block";
  loginAll.style.display = "none";
  newloginstuff.style.display = "block";
  newuser.style.display = "none";
}
newuser01.onclick = function(){
  sendNewUser();
}

backbutton.onclick = function(){
  var warn01 = document.querySelector("#warning");
  warn01.style.display = "none";
  back.style.display = "none";
  loginAll.style.display = "block";
  newloginstuff.style.display = "none";
  newuser.style.display = "inline-block";
  login.style.display = "inline-block";
}

  var saveValue;
  var deleteButton = document.getElementById("deleteButton");
  var deleteValue;
  deleteButton.onclick = function() {
    confirm("Are you sure you want to delete this Character sheet?");
    modal.style.display = "none";
    deleteCharacterSheet(deleteValue)
  }
  var create = document.getElementById("Create");
  var saveButton;
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  create.onclick = function() {
    defaultImage = "pictures/female/otherfemale01.png"
    image.src = defaultImage;
    modal.style.display = "block";
    deleteButton.style.display = "inline-block";
    setAllDefaults();
    var saveSheet = document.getElementById("saveButton");
    saveSheet.onclick = function() {
      console.log("save button was clicked");
      displayAttributes();
      sendData();
      modal.style.display = "none";
    }
  };
  function getCharacterSheet(fetchData) {
    console.log(fetchData['player'] + " was clicked, id = ", fetchData['id']);
    modal.style.display = "block";
    deleteValue = fetchData['id'];
    saveValue = fetchData['id'];
    charName.value = fetchData['name'];
    player.value = fetchData['player'];
    classType.value = fetchData['classs'];
    lvl.value = fetchData['lvl'];
    race.value = fetchData['race'];
    age.value = fetchData['age'];
    gender.value = fetchData['gender'];
    document.getElementById("STR").innerHTML = fetchData['strength'];
    document.getElementById("DEX").innerHTML = fetchData['dexterity'];
    document.getElementById("CON").innerHTML = fetchData['constitution'];
    document.getElementById("INT").innerHTML = fetchData['intellect'];
    document.getElementById("WIS").innerHTML = fetchData['wisdom'];
    document.getElementById("CHA").innerHTML = fetchData['charisma'];

    if (fetchData['race'] == 'human' && fetchData['gender'] == 'male') {
      image.src = humanMale;
    }
    if (fetchData['race'] == 'human' && fetchData['gender'] == 'female') {
      image.src = humanFemale;
    }
    if (fetchData['race'] == 'half-elf' && fetchData['gender'] == 'male') {
      image.src = halfelfMale;
    }
    if (fetchData['race'] == 'half-elf' && fetchData['gender'] == 'female') {
      image.src = halfelfFemale;
    }
    if (fetchData['race'] == 'elf' && fetchData['gender'] == 'female') {
      image.src = elfFemale;
    }
    if (fetchData['race'] == 'elf' && fetchData['gender'] == 'male') {
      image.src = elfMale;
    }
    if (fetchData['race'] == 'halfling' && fetchData['gender'] == 'female') {
      image.src = halflingFemale;
    }
    if (fetchData['race'] == 'halfling' && fetchData['gender'] == 'male') {
      image.src = halflingMale;
    }
    if (fetchData['race'] == 'dwarf' && fetchData['gender'] == 'male') {
      image.src = dwarfMale;
    }
    if (fetchData['race'] == 'dwarf' && fetchData['gender'] == 'female') {
      image.src = dwarfFemale;
    }
    if (fetchData['race'] == 'gnome' && fetchData['gender'] == 'female') {
      image.src = gnomeFemale;
    }
    if (fetchData['race'] == 'gnome' && fetchData['gender'] == 'male') {
      image.src = gnomeMale;
    }
    if (fetchData['race'] == 'half-orc' && fetchData['gender'] == 'male') {
      image.src = halforcMale;
    }
    if (fetchData['race'] == 'half-orc' && fetchData['gender'] == 'female') {
      image.src = halforcFemale;
    }
    if (fetchData['race'] == 'drow' && fetchData['gender'] == 'female') {
      image.src = drowFemale;
    }
    if (fetchData['race'] == 'drow' && fetchData['gender'] == 'male') {
      image.src = drowMale;
    }
  }

  var sendData = function() { // how to have this function call encodedstring if this function was outside of my giant closure.
    var dataString = encodeString();
    console.log("dataString", dataString)
    fetch('https://vicestes-dnd.herokuapp.com/Characters', {
        body: dataString,
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function () {
      loadData();
    });
  };

var top = document.querySelector(".tipytop");
var sendLogin = function(){
  var log;
  var data01 = encodeLogin01(log = true);
  console.log(data01);
  var warn01 = document.querySelector("#warning");
  var warn = document.createElement("div");
  fetch('https://vicestes-dnd.herokuapp.com/Sessions', {
    body: data01,
    method: 'POST',
    credentials: 'include',
    headers:{
      'content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function(response){
    if(response.status == 201){
      login.style.display = "none";
      wholething.style.display = "none";
      characterstuffbutton.style.display = "block";
      mod.style.display = "flex";
      warn01.style.display = "none";
      loadData();
      return response.json();
    }
    else{
      warn01.innerHTML = "Login failed";
      warn01.style.fontSize = "30px";
      warn01.style.color = "red";
      warn01.appendChild(warn);
    }
  }).then(function (data){
    if (data == null){
      console.log("fetched", data);
      top.style.display = "none";
      top.innerHTML = "welcome, " + data;
    }else{
      console.log("fetched", data);
      top.style.display = "block";
      top.innerHTML = "welcome, " + data;
    }
  });
}

var sendNewUser = function(){
  var log;
  var data01 = encodeLogin01(log = false);
  fetch('https://vicestes-dnd.herokuapp.com/Users/', {
    body: data01,
    method: 'POST',
    headers: {
      'content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function(response){
    var warn01 = document.querySelector("#warning");
    var warn = document.createElement("div");
    if(response.status == 201){
      document.querySelector("#newFname").value = "";
      document.querySelector("#newLname").value = "";
      document.querySelector("#newEmail").value = "";
      document.querySelector("#newPass").value = "";

      warn01.innerHTML = "Login created";
      warn01.style.fontSize = "30px";
      warn01.style.color = "green";
      warn01.appendChild(warn);
      login.style.display = "none";

    }
    else if(response.status == 422){
      warn01.innerHTML = "Email already used";
      warn01.style.fontSize = "30px";
      warn01.style.color = "red";
      warn01.appendChild(warn);
      console.log("email already there");
    }
  });
};

  function updateData(saveId) {
    var dataString = encodeString();
    var id = saveId;
    fetch('https://vicestes-dnd.herokuapp.com/Characters/' + id, {
        body: dataString,
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
      loadData();
    });
  }

  function deleteCharacterSheet(deleteValue) {
    id = deleteValue;
    fetch('https://vicestes-dnd.herokuapp.com/Characters/' + id, {
      method: 'DELETE',
      credentials: 'include'
    }).then(function (response) {
      loadData();
    });
  }

  var loadData = function() {
    return fetch('https://vicestes-dnd.herokuapp.com/Characters', {
      credentials: 'include'
    }).then(function (response) {
      if(response.status == 200){
        login.style.display = "none";
        wholething.style.display = "none";
        characterstuffbutton.style.display = "block";
        mod.style.display = "flex";
        response.json().then(function (data) {
          displayData(data);
        })
      }
      if(response.status == 401){
        login.style.display = "inline-block";
        wholething.style.display = "block";
        characterstuffbutton.style.display = "none";
        mod.style.display = "none";
      }
    });
  }
  loadData();

})();
