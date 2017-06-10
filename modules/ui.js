/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 **/

var EXPORTED_SYMBOLS = [];

Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("chrome://pwdbt-modules/content/common.js");

PwdEx.UI = {
  /* Logger for this object. */
  _logger : null,

  /**
   * Initializes the object.
   */
  init : function() {
    this._logger = PwdEx.getLogger("PwdEx.UI");
    this._logger.debug("init");
  },

  /**
   * Opens the file picker for an export operation.
   * @param aWindow the parent window for the file picker.
   * @return object with chosen file and file type, null if no choice was made.
   */
  openExportFilePicker : function(aWindow) {
    this._logger.debug("openExportFilePicker");

    let picker =
      Components.classes["@mozilla.org/filepicker;1"].
        createInstance(Components.interfaces.nsIFilePicker);
    let result = null;

    picker.init(
      aWindow, PwdEx.getString("passwordexporter.filepicker-title"),
      picker.modeSave);
    picker.defaultString =
      "password-export-" + this._getDateString() + ".xml";
    picker.defaultExtension = "xml";
    picker.appendFilter("XML", "*.xml");
    picker.appendFilter("CSV", "*.csv");

    if (picker.returnCancel != picker.show()) {
      result = { file : picker.file, type : picker.filterIndex };
    }

    return result;
  },

  /**
   * Returns current date in YYYY-MM-DD format for default file names.
   */
  _getDateString: function() {
    this._logger.trace("_getDateString");

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = (month < 10 ? '0' + month : month);
    day = (day < 10 ? '0' + day : day);

    return (year + "-" + month + "-" + day);
  }
};

/**
 * Constructor.
 */
(function() {
  this.init();
}).apply(PwdEx.UI);
