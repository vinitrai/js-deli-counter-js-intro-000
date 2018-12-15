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
  var str = '';
  if(array.length===0){
    str = `There is nobody waiting to be served!`;
  }
  else
  {
    while(array.length!=0){
     str = `Currently serving ${array[0]}.`;
      array.shift();
   }
 }
return str;
}
