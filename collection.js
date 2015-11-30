/***************************
Nov 24 Warmup
Add, Subtract, Multiply, Divide
Input: String
****************************/
function nov24()
{
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
****************************/
function nov30()
{
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
      //console.log("Key: " + key + "\t\t Value: " + value);
    }
    return paramSet;
  }

  console.log(parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA"));
  //=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}
  console.log(parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week"));
  //=> {q: "dogs", sort: "top", t: "week"}
}


/***************************
Functions
****************************/

nov24();
nov30();
