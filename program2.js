const decodeTheRing = function (str, pattern)

if(str.lenght !== pattern.length){
  return false;
}

for(let i=0; i<str.lenght; i++){
  if(pattern[i] !== '*' && str[i]!== pattern[i])
  {
return false;
  }
}
return true;