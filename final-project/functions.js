
$( ".draggable" ).draggable();

$( ".dresser-drop" ).droppable({
  accept: ".clothes",
  drop: function( event, ui ) {
    $( this ).addClass( "hide" )
    $( '.clean-dresser' ).removeClass( "hide" )
    $( '.clothes' ).addClass( "hide" )
  }
});

$( ".shelf-drop" ).droppable({
  accept: ".books",
  drop: function( event, ui ) {
    $( this ).addClass( "hide" )
    $( '.clean-shelf' ).removeClass( "hide" )
    $( '.books' ).addClass( "hide" )
  }
});

function cleanBed() {
  $( '.messy-bed' ).addClass( "hide" )
  $( '.clean-bed' ).removeClass( "hide" )
}

function closedDoor() {
  $( '.open-door' ).addClass( "hide" )
  $( '.closed-door' ).removeClass( "hide" )
}
