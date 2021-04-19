function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  function zf_ValidateNumber(elem) {
    var validChars = "-0123456789";
    var numValue = elem.value.replace(/^\s+|\s+$/g, '');
    if (numValue != null && !numValue == "") {
      var strChar;
      var result = true;
      if (numValue.charAt(0) == "-" && numValue.length == 1) {
        return false;
      }
      for (i = 0; i < numValue.length && result == true; i++) {
        strChar = numValue.charAt(i);
        if ((strChar == "-") && (i != 0)) {
          return false;
        }
        if (validChars.indexOf(strChar) == -1) {
          result = false;
        }
      }
      return result;
    } else {
      return true;
    }
  }
  console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
