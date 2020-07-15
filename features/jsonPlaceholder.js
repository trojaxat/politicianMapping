"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos";
axios_1["default"].get(url).then(function (response) {
  var todo = response.data;
  var id = todo.id;
  var title = todo.title;
  var finished = todo.completed;
  console.log(
    "\n    The Todo with id: " +
      id +
      "\n    The Todo with title: " +
      title +
      "\n    Finished?  " +
      finished +
      "\n  "
  );
});
