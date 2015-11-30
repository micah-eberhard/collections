/***************************
Nov 23 Warmup
Find Average through forEach
Input: Number Array
****************************/
function nov23()
{
  console.log("\n-----Nov23-----\nFind Average through forEach\n");
  function getAverage(element, indx, arr)
  {
    avg += element;
  }
  var avg = 0;
  var stuff = [1,2,3,4,5,6,7,8,9,10,30,90];

  stuff.forEach(getAverage);
  avg = avg / stuff.length;
  console.log(avg);
}

/***************************
Nov 24 Warmup
Add, Subtract, Multiply, Divide
Input: String
****************************/
function nov24()
{
  console.log("\n\n-----Nov24-----\nAdd, Subtract, Multiply, Divide from String\n");
  function subtractString(str)    //Sutract
  {
    var arr = str.split('-');
    var hold = parseFloat(arr[0]);

    for(var i = 1; i < arr.length; i++)
    {
      var num = parseFloat(arr[i]);
      hold = hold - num;
    }
    return hold;
  }

  function divideString(str)    //Divide
  {
    var arr = str.split('/');
    var hold = parseFloat(arr[0]);

    for(var i = 1; i < arr.length; i++)
    {
      var num = parseFloat(arr[i]);
      hold = hold / num;
    }
    return hold;
  }
  function addString(str)    //Add
  {
    var arr = str.split('+');
    var hold = parseFloat(arr[0]);

    for(var i = 1; i < arr.length; i++)
    {
      var num = parseFloat(arr[i]);
      hold = hold + num;
    }
    return hold;
  }
  function multiplyString(str)    //Multiply
  {
    var arr = str.split('*');
    var hold = parseFloat(arr[0]);

    for(var i = 1; i < arr.length; i++)
    {
      var num = parseFloat(arr[i]);
      hold = hold * num;
    }
    return hold;
  }
  console.log(subtractString('10-20-30'));
  console.log(divideString('10/20'));
  console.log(addString('10+20'));
  console.log(multiplyString('10*20'));
}


/***************************
Nov 30 Warmup
Parsing a Query String from a URL
Input: String
****************************/
function nov30()
{
  console.log("\n\n-----Nov30-----\nParsing a Query String from a URL\n");
  function parseQueryString(str)
  {
    var paramSet = {};
    var hold = str.split("?");
    str = hold[1];
    hold = str.split("&");

    for(var i = 0; i < hold.length; i++)
    {
      var pair = hold[i].split("=");
      var key = pair[0];
      var value = pair[1];

      paramSet[key] = value;
    }
    return paramSet;
  }

  console.log(parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA"));
  //=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}
  console.log(parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week"));
  //=> {q: "dogs", sort: "top", t: "week"}

  console.log("\n\n-----Nov30-----\nAsync Demonstration\n");
  function timerApp()
  {
    //console.log("in timer");
    var timeout = false;
    var waitAmt = 100;
    function timer(){
      setTimeout(function(){
        timeout = true;
      }, waitAmt);

      wait();


    }
    function wait(){

      if (!timeout) {
        console.log("working ... waiting");
        setTimeout(wait,10);
        }
        else {
          console.log('done');
        }
      }
    timer();
  }
  //console.log('\n\n');
  timerApp();
}


/***************************
Functions
****************************/

nov23();
nov24();
nov30();
