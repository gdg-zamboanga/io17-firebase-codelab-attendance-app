$(document).ready(() => {
  // App Initializations
  $.fn.serializeObject = function () {
    let data = {}
    this.serializeArray().forEach(input => { data[input.name] = input.value })
    return data
  }

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  })

  function addRow(surname, givenName, gender, level) {
    let row = $('<tr />')
    $('<td />').html(`${surname}, ${givenName}`).appendTo(row)
    $('<td />').html(`${gender}`).appendTo(row)
    $('<td />').html(`${level}`).appendTo(row)
  }

  /*
   * #2: Firebase Authentication
   *
   * 1. Check when user is authenticated
   * 1A. If authenticated enable forms...
   * 1B. Else, redirect to Google+ Signin.
   */

  $('#attendanceForm').on('submit', function(event) {
    event.preventDefault()
    let formData = $(this).serializeObject()

    console.log(formData)
    /*
     * #3: Firebase Push (Write data to database)
     *
     * 1. Push `formData` to database
     */
  })

  /*
   * #4: Read data from database real-time
   *
   * 1. Everytime there's a new data in the database, add it to the table.
   */

})