function Album() {
    parent.location='./html-pages/product.html'
}

// window.addEventListener('scroll', function() {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
//         document.getElementById('header').style.background='rgb(214, 214, 214)';
//     }
// }); 
$(document).ready(function() {
    $(".target").show( "drop", 
    {direction: "down"}, 1000 );
$(".target2").show( "drop", 
    {direction: "down"}, 1000 );

});