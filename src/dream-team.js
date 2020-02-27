module.exports = function createDreamTeam(members) {

  let result = [];
  if (members!=undefined) {
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) === 'string' && members[i] != ' ') {
        result.push(members[i].replace(/ /g,'').slice(0, 1).toUpperCase());
      }
    }
    return result.sort().join('');
  } else{
    return false;
  }
};