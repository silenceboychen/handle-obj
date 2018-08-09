module.exports = obj => {
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (let key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        const newObj = mapObj(obj, obj[key]);
        delete obj[key]
        Object.assign(obj, newObj);
      }
    };
    return obj;
  }
  return "该变量不是对象";
}

function mapObj(originObject, newObj) {
  for (let key in newObj) {
    if (typeof newObj[key] === 'object' && !Array.isArray(newObj[key])) {
      mapObj(originObject, newObj[key]);
    } else {
      originObject[key] = newObj[key]
    }
  } 
  return originObject;
}
