function format(d) {
    // `d` is the original data object for the row
    return (

        '<div class="mb-3 col-3">'+
        '<label for="company" class="form-label">Email</label>'+
        '<input type="text" value="'+ d[3] +'" name="empresa" id="company" class="form-control" placeholder="" aria-describedby="helpId" disabled="true">'+
        '</div>'+

        '<div class="mb-3 col-3">'+
        '<label for="company" class="form-label">Email</label>'+
        '<input type="text" value="'+ d[4] +'" name="empresa" id="company" class="form-control" placeholder="" aria-describedby="helpId" disabled="true">'+
        '</div>'+
        '<div class="mb-3 col-3">'+
        '<label for="company" class="form-label">Email</label>'+
        '<input type="text" value="'+ d[5] +'" name="empresa" id="company" class="form-control" placeholder="" aria-describedby="helpId" disabled="true">'+
        '</div>'
        
    );
} 



var table = $('#socios').DataTable( {
    columnDefs: [
        { visible: false, targets: [3,4,5] }
    ]
} );

// Add event listener for opening and closing details
$('#socios tbody').on('click', 'td.dt-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row(tr);
 
    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
    }
    else {
        // Open this row
        row.child(format(row.data())).show();
    }
});





