module.exports = function repeater(str, options) {
    let newString = str;
    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';
    let repeatStr = '';
    if (options.addition!==undefined  && options.additionRepeatTimes>0) {
        repeatStr = options.addition + options.additionSeparator;
        repeatStr = repeatStr.repeat(options.additionRepeatTimes);
        repeatStr=repeatStr.slice(0,repeatStr.length-options.additionSeparator.length);
    }else{
        if(options.addition){
            repeatStr=options.addition;
        }
    }
    if (options.repeatTimes!==undefined) {
        newString = newString + repeatStr + options.separator;
        newString = newString.repeat(options.repeatTimes);
        newString=newString.slice(0,newString.length-options.separator.length);
    }else{
        newString=newString+repeatStr;
    }
    return newString;
};
