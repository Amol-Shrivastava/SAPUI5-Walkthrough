// /*
// sap.ui.define(["sap/ui/base/ManagedObject"], function (ManagedObject) {
//   "use strict";

//   return ManagedObject.extend(
//     "sap.ui.demo.walkthrough.controller.App",
//     {}
//   );
// });
// */

//Controller Assests
sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    onShowHello: function () {
      // show a native JavaScript alert
      /* eslint-disable no-alert */
      alert("Hello World I'm here to rock");
      /* eslint-enable no-alert */
    },
  });
});
