function takeANumber(array,name){
  array.push(name);
  var str ='';
  var i=0;
  while(i<array.length){
    str = `Welcome, ${name}. You are number ${i+1} in line.`;
    i++;
  }
  return str;
}

function nowServing(array){
  if(array.length===0){
    return `There is nobody waiting to be served!`;
  }
  else{
    while(array.length!=0){
    array[0];
    continue;
    array.shift();
  }

}
}


function currentLine(line){
  if(line.length===0){
    return `The line is currently empty.`;
  }
  else{
    var str = 'The line is currently:';
    for(var i=0;i<line.length;i++){
      if(i===line.length-1){
        str += ` ${i+1}. ${line[i]}`;
      }
      else{
      str += ` ${i+1}. ${line[i]},`;
    }
    }

  }
  return str;
}
