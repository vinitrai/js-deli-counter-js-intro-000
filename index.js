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
    var i=0;
   while(i<array.length){
   console.log(`Currently serving ${array[i]}.`);
   array.shift();
  }
}

}

function currentLine(){
  
}
