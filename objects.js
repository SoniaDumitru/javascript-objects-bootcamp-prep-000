var playlist = {
  sonia: 'Where are you?',
  diana: 'I am lost'
}
function updatedList (obj,key,value) {
  return playlist.assign({},obj,{[key]:value});
}
