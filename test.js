var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var assert = require('assert');

//---------------------SETTINGS-------------------------------------------//
const DICE_NUM     = 2;
const DICE_COUNT   = 10;
const SIDES        = 6;
var   SIDE_PERCENT = 100 / 6;
const URL          = `https://www.random.org/dice/?num=${DICE_NUM}`;
var   RESULT       = {'1' : 0, '2' : 0, '3' : 0, '4' : 0, '5' : 0, '6' : 0, 
                      '7' : 0, '8' : 0, '9' : 0, '10' : 0, '11' : 0, '12' : 0};
var   PERCENT      = 16.6;
//-------------------------------------------------------------------------//

for(i = 0; i < DICE_COUNT; i++){
    var res = GetRequest(URL);
    var sum = 0;
    res.match(/(alt="\w.+?)/g).map(c => c.slice(5, 6)).forEach(x => sum += + x);
    RESULT[`${sum}`]++;
}

function GetRequest(URL)
{
    var req = new XMLHttpRequest();
    req.open( "GET", URL, false );
    req.send( null );
    return req.responseText;
}

function CalculatePercent(array) {
    for (i = 0; i < array.length; i++) {
        PERCENT = array[i] / DICE_COUNT * 100;
        Math.abs(SIDE_PERCENT - PERCENT);
    }
}
function Console(result){
    if(DICE_NUM == 1){
    let res = Object.assign(...Object.keys(result).map(k => + k <= SIDES ? ({[k]: result[k]}) : ("")));
    console.log(res);
    }
    else{
        console.log(result);
    }
}
CalculatePercent(RESULT);
Console(RESULT);