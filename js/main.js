const book_a_trip = document.querySelector(".book_a_trip");
const book_a_triP_OST = book_a_trip.offsetTop;
const book_a_trip_height = book_a_trip.offsetHeight;

const ongoing_percent = document.querySelector(".ongoing .percent");
const ongoing_bar = document.querySelector(".ongoing .bar");



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





