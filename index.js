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
  else
  {
    while(array.length!=0){

      array.shift();
      var str= `Currently serving ${array[0]}.`;
    }
return str;
  }

}
