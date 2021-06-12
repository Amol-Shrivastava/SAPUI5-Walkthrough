/*
    1. Used a function define
    2. passed it an array of type of content here "Text"
    3. passed it an function with parameter Text same as above
    4. then defined a new object of Text Class
    5. passed its constructor an object with desired text(Hello Amol)
    6. used another function .placeAt(id) to put the desired text in the desired id here id

      sap.ui.define(["sap/m/Text"], (Text) => {
      "use strict";
      new Text({
        text: "Hello Amol",
      }).placeAt(content);
      }); 
*/

//Extracting data from view

sap.ui.define(["sap/ui/core/mvc/XMLView"], (XMLView) => {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then((oView) => {
    oView.placeAt("content");
  });
});
