$(document).ready(function(){
 
    // code the todolist here 

    $("#input-data").change(function(){

        // code to add on list 
       let dataContent=$(this).val();

       $("ul").append(`<li>${dataContent} <i class="fa-check-square fas fa-trash"></i></li>
       `)

       // code to remove from list

       $("ul").on('click','.fa-check-square',function(){
           $(this).parent('li').fadeOut(200);
       })

      let x= $("ul").parent('div');
      console.log(x);

    })
   


})