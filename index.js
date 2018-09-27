var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const new_object = object
  delete new_object[key]
  console.log(new_object)
  console.log(object)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
}
