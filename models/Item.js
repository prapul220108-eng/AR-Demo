let items = [];
let nextId = 1;

const Item = {
  getAll() {
    return items;
  },
  create(name) {
    const item = { id: nextId++, name };
    items.push(item);
    return item;
  },
};

module.exports = Item;