$(document).ready(function(){
    
        
    $.ajax({
        type:"GET",
        url:"books.json",
        
        success:function(book){
            console.log(book);
           
           
            var output=" "
        
           for(i in book)
           {
         // console.log(book)
         
                output+="<br><div class='col col-12  col-md-3 d-flex align-items-stretch'>"
        
              output+="<div class='card' style='width:'12rem' height='100''>";
              output+="<img class='card-img-top' src='"+book[i].cover+"'width:'40px' height:'20px'>";
                output+="<div class='card-body'>";
                output+="<h4 class='card-title'>"+ book[i].name+"</h4>";
                output+="<p class='card-text'>"+book[i].description+"</p>";
                output+="<p class='card-text'>"+book[i].price+"</p>";
                output+="<a href="+book[i].price+" class='btn btn-primary'>buy now</a>  </div></div>";
              output+="<div></div></div>";
             
            
           }
           $("#d1").html(output);
        }
    });
});
