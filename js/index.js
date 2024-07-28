$(function () {
    $(".loader").fadeOut(5000, function () {
        $(".loading").fadeOut(5000);
        $("body").css("overflow", "auto");
    })
})
let htmlElement = ` <i onclick="closeSlider();" class="bi bi-x-square fs-4 ps-4 pt-5"></i>
<div class="container position-relative align-items-center justify-content-center" style="">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="images/gallery-1.jpg" width="100%" height="650px" class="d-block " alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="images/gallery-2.jpg" width="100%" height="650px" class="d-block  w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/gallery-3.jpg" width="100%" height="650px" class="d-block  w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/gallery-4.jpg" width="100%" height="650px" class="d-block w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/gallery-5.jpg" width="100%" height="650px" class="d-block w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/gallery-6.jpg" width="100%" height="650px" class="d-block w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/gallery-7.jpg" width="100%" height="650px" class="d-block w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/gallery-8-2.jpg" width="100%" height="650px" class="d-block w-100 " alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>`;

function popUp() {

    $(".popUpImg").html(htmlElement);
    $(".popUpImg").removeClass("d-none");
}
function closeSlider() {
    $(".popUpImg").addClass("d-none");
}

console.log($(".galleryImg").attr);



function appear(){
  $("body").css("overflow", "hidden");
setTimeout(() => {
  $(".load").fadeOut();
  $("body").css("overflow", "visible");
}, 1000);

}