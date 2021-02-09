const users = [
  {id: 1, name: 'User 1', age: 30},
  {id: 2, name: 'User 2', age: 24},
  {id: 3, name: 'User 3', age: 40},
  {id: 4, name: 'User 4', age: 50},
  {id: 5, name: 'User 5', age: 100},
  {id: 6, name: 'User 6', age: 32},
  {id: 7, name: 'User 7', age: 15}
];


function create(name, age) {
  const id = users.length + 1;
  users.push({id, name, age});

  return users[users.length-1];
}

function deleteUser(id) {
  const index = users.findIndex(user => user.id == id);
  const user = users.splice(index, index);
  return user;
}

function update(id, age, name) {
  try {
    const user = users.find(user => user.id == id);
    user.age = age.length === 0 ? user.age: age;
    user.name = name.length === 0 ? user.name: name;
    return {user, err: null};
  } catch (err) {
    return {err, user: null}
  }
}

function get(id) {
  return users.find(user => user.id == id);
}

module.exports = {
  users,
  create,
  delete: deleteUser,
  update,
  get
};
