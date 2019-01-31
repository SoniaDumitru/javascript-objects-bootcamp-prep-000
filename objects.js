var playlist = {
  sonia: 'Where are you?',
  diana: 'I am lost'
}
function updatedList (obj,key,value) {
  return obj.assign({},obj,{[key]:value});
}
