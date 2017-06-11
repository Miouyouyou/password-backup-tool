/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 **/

var EXPORTED_SYMBOLS = [ "PwdEx" ];

Components.utils.import("resource://gre/modules/Services.jsm");

/**
 * PwdEx namespace.
 */
if ("undefined" == typeof(PwdEx)) {
  var PwdEx = {
    /**
     * Initialize this object.
     */
    init : function() {

      this.stringBundle =
        Services.strings.createBundle(
          "chrome://pwdbackuptool/locale/passwordexporter.properties");
    },

    /**
     * Gets the string from the string bundle.
     * @param aKey the key that identifies the string.
     */
    getString : function(aKey) {
      return this.stringBundle.GetStringFromName(aKey);
    }
  };

  /**
   * Constructor.
   */
  (function() {
    this.init();
  }).apply(PwdEx);
}
