const coolGreeting = (person) => {
    return person.isCool ? `What is UP ${person.name.toUpperCase()}? How you been doin'?`: `Greetings ${person.name}, how have you been lately?`
};

const haveBirthday = (person) => {
  person.age+=1
};

const becomeSecretAgent = (person, spyHandle) => {
  person.spyHandle = spyHandle
  delete person.name
};

const carMaker = (name,maker,year) => {
   const car = {
    name,
    year,
    maker,
    needsOilChange: false
  }
  return car
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};

const listHobbies = (person) => {
  for(const hobby in person.hobbies){
    console.log(`${person.name} likes ${person.hobbies[hobby]}.`)
  }
};

const getNextOpponent = (team) => {
  const name =  team.matches[0]
  if(name === undefined){
    return null
  }
   return name.teamName
};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = (obj) => {
  return Object.values(obj)
};

const convertToMatrix = (arr) => {
  let matrix = []
  if(arr.length === 0){
    return matrix
  }
  matrix.push(Object.keys(arr[0]))
  for(let i=0; i<arr.length;i++){
    matrix.push(Object.values(arr[i]))
  }
  console.info(matrix)
  return matrix

};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
