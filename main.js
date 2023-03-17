$(document).ready(function(){
  var input1;
  var input2;

  var dataBase = ["tomikai", "kaitomi", "nickavien", "aviennick", "seraiyehroman", "romanseraiyeh", "tominick", "nicktomi", "tomiseraiyeh", "seraiyehtomi", "tomiroman", "romantomi", "tomiavien", "avientomi", "nickkai", "kainick", "nickseraiyeh", "seraiyehnick", "nickroman", "romannick", "avienkai", "kaiavien", "avienroman", "romanavien", "kaiseraiyeh", "seraiyehkai", "kairoman", "romankai", "avienseraiyeh", "seraiyehavien", "kaikai", "avienavien", "tomitomi", "nicknick", "romanroman", "seraiyehseraiyeh", "aviensilas", "silasavien"];
  var dataBaseNum = [93, 93, 74, 74, 50, 50, 88, 88, 67, 67, 41, 41, 0, 0, 85, 85, 72, 72, 40, 40, 0, 0, 0, 0, 89, 89, 0, 0, 0, 0, 94, 79, 43, 99, 25, 82, 124, 124];

  $("#calc").click(function(){
    input1 = $("#input1").val().toLowerCase();
    input2 = $("#input2").val().toLowerCase();

    // console.log(input1);
    // console.log(input2);

    shipChecker(input1+input2, input2+input1);
    showPhoto();

  });

  function shipChecker(shipName, shipName2){
    var randomNum;
    if(dataBase.includes(shipName) == false){
      dataBase.push(shipName);
      dataBase.push(shipName2);
      console.log(dataBase);
      randomNum = Math.floor((Math.random() * 100));
      dataBaseNum.push(randomNum);
      dataBaseNum.push(randomNum);
      console.log(dataBaseNum);
      giveAnswer(randomNum);
    }else {
      var indexNum = dataBase.indexOf(shipName, 0);
      giveAnswer(dataBaseNum[indexNum]);
    }

  }
  function giveAnswer(number){
    $("#label").text(input1 + " and " + input2 + " are " + number + "% compitable!");
  }

  function showPhoto(){
    if (input1 === "tomi"){
      $("#img1").attr("src", "images/tomi.jpg");
    }else if (input1 === "kai"){
      $("#img1").attr("src", "images/kai.jpg");
    }else if (input1 === "avien"){
      $("#img1").attr("src", "images/avien.jpg");
    }else if (input1 === "roman"){
      $("#img1").attr("src", "images/roman.jpg");
    }else if (input1 === "seraiyeh"){
      $("#img1").attr("src", "images/seraiyeh.jpg");
    }else if (input1 === "nick"){
      $("#img1").attr("src", "images/nick.jpg");
    }else {
      noPhoto(1);
    }

    if (input2 === "tomi"){
      $("#img2").attr("src", "images/tomi.jpg");
    }else if (input2 === "kai"){
      $("#img2").attr("src", "images/kai.jpg");
    }else if (input2 === "avien"){
      $("#img2").attr("src", "images/avien.jpg");
    }else if (input2 === "roman"){
      $("#img2").attr("src", "images/roman.jpg");
    }else if (input2 === "seraiyeh"){
      $("#img2").attr("src", "images/seraiyeh.jpg");
    }else if (input2 === "nick"){
      $("#img2").attr("src", "images/nick.jpg");
    }else {
      noPhoto(2);
    }
  }

  function noPhoto(num){
    $("#img" + num).attr("src", "https://i.imgur.com/wKWi6JN.png");
  }
});


//  WHEN BUTTON IS PRESSED
// CHECK IF THE NAMES EQUAL PREVIOUSLY EXISTING ONES
// IF NOT, GENERATE CATALOG THEM AND GENERATE A RANDOM NUMBER
