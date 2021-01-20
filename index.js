function findMatching(drivers, str) {
   return drivers.filter(name => name.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
   let fL = l => l.charAt(0).toLowerCase()
   return drivers.filter(name => fL(name) === fL(str))
}

function matchName(drivers, str) {
   return drivers.filter(drivObj => drivObj.name === str)
}
