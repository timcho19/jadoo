const book_a_trip = document.querySelector(".book_a_trip");
const book_a_triP_OST = book_a_trip.offsetTop;
const book_a_trip_height = book_a_trip.offsetHeight;

const ongoing_percent = document.querySelector(".ongoing .percent");
const ongoing_bar = document.querySelector(".ongoing .bar");

const testimonialsList = document.querySelectorAll(".testimonials ul li");
const testimonial_pager = document.querySelectorAll(".testimonials .pager a");
const testimonial_upBtn = document.querySelector(".testimonials .up");
const testimonial_downBtn = document.querySelector(".testimonials .down");
let testimonialIndex = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY - 300 > book_a_triP_OST - book_a_trip_height) {
    if( !book_a_trip.classList.contains("active")){
    book_a_trip.classList.add("active");
    startNumberAnimation();
    }

  } 
});

function startNumberAnimation(){
  let start = 0;
  let end = Number(ongoing_bar.getAttribute('data-rate'));

  setInterval(() => {
    if (start < end) {
      start++;
      ongoing_percent.innerText = start + "%";
      ongoing_bar.style.width = start + "%";
    } else {
      clearInterval(this);
    }
  }, 100);
}



/*testimonials*/
testimonial_pager.forEach((pager, index) => {
  pager.addEventListener("click", function (e) {
    e.preventDefault();
    // 모든 페이저에서 active 클래스 제거
    testimonial_pager.forEach((item) => {
      item.classList.remove("active");
    });

    //클릭한 페이저에 액티브 추가
    pager.classList.add("active");

    // 클릭한 페이저에번호에 맞는 리스트에 active 제거
    testimonialsList.forEach((pager) => {
      pager.classList.remove("active");
    });

    //클릭한 페이저번호에 리스트 액티브 추가
    testimonialsList[index].classList.add("active");
    testimonialIndex = index;
  });
});


testimonial_downBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if(testimonialIndex < testimonialsList.length - 1) {
    testimonialIndex++;
  }
  else {
    testimonialIndex = 0;
  }

  changeTestimonial(testimonialIndex);

});

testimonial_upBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if(testimonialIndex > 0) {
    testimonialIndex--;
  }
  else {
    testimonialIndex = testimonialsList.length - 1;
  }

  changeTestimonial(testimonialIndex);

});

