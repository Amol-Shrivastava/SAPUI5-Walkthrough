sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        // set data model on view
        //Data stored in JSON format
        var oData = {
          recipient: {
            name: "Hey World",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        //Set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });

        this.getView().setModel(i18nModel, "i18n")
      },

      onShowHello: function () {
        // MessageToast.show("Hello World");

        //Read Message from i18n Model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();

        var sRecipient = this.getView().getModel().getProperty("/recipient/name");

        var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        MessageToast.show(sMsg);
      },
    });
  }
);
