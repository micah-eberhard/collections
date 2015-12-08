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
Dec 2 Warmup
Varrious array manipulations:
Intersection, Union, Zip
****************************/
function dec2()
{
  console.log("\n\n-----Dec02-----\nVarrious array manipulations: Intersection, Union, Zip\n");
  function intersect(arr1, arr2)
  {
    var arr3 = [];
    for (var item in arr1)
    {
      for(var stuff in arr2)
      {
        if(arr2[stuff] === arr1[item])
        {
          arr3.push(arr1[item]);
        }
      }
    }
    return arr3;
  }
  function union(arr1, arr2)
  {
    var arr3 = [];
    for(var item in arr1)
    {
      arr3.push(arr1[item]);
    }
    for(var item in arr2)
    {
      arr3.push(arr2[item]);
    }
    return arr3;
  }
  function zip(arr1, arr2)
  {
    var arr3 = [];
    var len = 0;
    if(arr1.length > arr2.length)
    {
      len = arr1.length;
    }
    else
    {
      len = arr2.length;
    }

    for(var i = 0; i < len; i++)
    {
      arr3.push(arr1[i]);
      arr3.push(arr2[i]);
    }
    return arr3;
  }




  var arrOne = [1,2,3];
  var arrTwo = [1,3,5];
  var arrThree = [4,5,6];

  console.log(intersect(arrOne, arrTwo));
  console.log(union(arrOne, arrThree));
  console.log(zip(arrOne, arrThree));
}

/***************************
Dec 8 Warmup
Garble a paragraph string to scramble the order
of words except the first and last letters.
Input: String
****************************/
function dec8()
{
  function garble (str){
    var strArr = str.split(' ');
    var newArr = [];

    for(var i=0; i < strArr.length; i++)
    {
      currArr = strArr[i].split('');
      var holdArr = [];
      var pickedArr = [];
      holdArr.push(currArr[0]);
      for(var k=1; k < currArr.length-1; k++)
      {
        var newRand = false;
        var randIdx = -1;
        while(!newRand)
        {
          randIdx = Math.floor(Math.random()*(currArr.length-1)+1);
          newRand = true;
          for(var v=0; v < pickedArr.length; v++)
          {
            if(randIdx === pickedArr[v])
              newRand = false;
          }
        }
        pickedArr.push(randIdx);
        holdArr[randIdx] = currArr[k];
      }
      holdArr.push(currArr[currArr.length-1]);

      var newStr = holdArr.join('');
      newArr.push(newStr);
    }
    var wholeStr = newArr.join(' ');

    return wholeStr;
  }

  var para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  console.log(garble(para));
}
/***************************
Functions
****************************/

nov23();
nov24();
nov30();
dec2();
dec8();
