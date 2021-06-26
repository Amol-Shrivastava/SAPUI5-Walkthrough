//Controller Assests
sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function () {
        // show a native JavaScript alert
        /* eslint-disable no-alert */
        /* eslint-enable no-alert */

        MessageToast.show("Hellow There World...");
      },
    });
  }
);
