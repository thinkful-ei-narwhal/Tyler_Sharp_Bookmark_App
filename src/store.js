const cuid = require("cuid");
const store = [
  {
    id: cuid(),
    title: "",
    description: "",
    rating: 0,
    expanded: false,
  },
];

module.exports = store;
