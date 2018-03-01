module.exports = function check(str, bracketsConfig) {
    var a = {};
    var cl = [];
    var op = [];
    var count = 0;


    for (var i in bracketsConfig){
        a[bracketsConfig[i][0]] = +i + 1;
        a[bracketsConfig[i][1]] = (0 -(+i + 1));
        cl.push(bracketsConfig[i][1]);
        op.push(bracketsConfig[i][0]);
    }

    for (var i in str){
        count = count + a[str[i]];
        if (count < 0){
            break;
        }
    }

    if (count == 0){
        return true;
    }
    else{
        return false;
    }
}
