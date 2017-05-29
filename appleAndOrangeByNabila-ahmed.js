process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var s = 0;
var t = 0;
var a = 0;
var b = 0;
var totalApples = 0;
var totalOranges = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s_temp = readLine().split(' ');
    s = parseInt(s_temp[0]);
    t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    a = parseInt(a_temp[0]);
    b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    applesInTheHouse = readFruit(apple, m, 0);
    orangesInTheHouse = readFruit(orange, n, 1);
    

}

function readFruit(fruits, qt, type) {
    if(qt == 0) {
        console.log(0);
        return;
    }
    for(x = 0; x < qt; x++) {
        if(type == 0) {
            totalApples += fruitInstance(fruits[x], 0);
            
        } else if(type == 1){
            totalOranges += fruitInstance(fruits[x], 1);
        }
    }
    if(type == 0) {
        console.log(totalApples);
    } else if(type == 1) {
        console.log(totalOranges);
    }
}

function fruitInstance(fruit, type) {
    var d = 0;
    if(type == 0) {
        d = fruit + a;
    } else if(type == 1) {
        d = fruit + b;
    }
    
    if(d >= s && d<= t) {
        return 1;
    }
   
    return 0;
}

