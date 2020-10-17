//add item

$( "#js-shopping-list-form" ).submit(function( event ){
    var newItem = $("input").val()
    $("ul").append( 
        "<li>" +
        "<span class='shopping-item'>" + newItem + "</span>" +
        "<div class='shopping-item-controls'>" +
          "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>" + "check" + "</span>" +
          "</button>" +
          "<button class='shopping-item-delete'>" +
            "<span class='button-label'>" + "delete" + "</span>" +
          "</button>" +
        "</div>" +
      "</li>"
        
        );

    event.preventDefault();

    console.log("test-add");
    console.log(newItem);
});




//check off item

$( "ul" ).on( 'click','button.shopping-item-toggle' , function(){
    
    console.log(this)
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked"); 
        
    console.log("test-check");
});

  

//delete item

$( "ul" ).on('click', 'button.shopping-item-delete' , function(){
    $(this).closest("li").remove();
    
    console.log("test-delete");
});