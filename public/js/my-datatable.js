$(document).ready(function() {
  	$("#myDatatableInput").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $("#myDatatable tr").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
  	});
});