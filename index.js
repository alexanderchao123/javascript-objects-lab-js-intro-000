var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var new_obj = object
  delete new_object[key]
  return new_obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
}
