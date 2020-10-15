// * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.

    // Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: cb => {
    orm.all("burgers", res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("burgers", cols, vals, res => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, res => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("burgers", condition, res => {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;