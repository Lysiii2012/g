var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop:true,
    navigation: {
      nextEl: ".swiper-btn-prev  ",
      prevEl: ".swiper-btn-next",
    },
  });
 
  const formPopUp = document.querySelector('.pop_up_form');
  const closeBtn = document.querySelector('.close');
  const body = document.body;
  const form = formPopUp.querySelector('.pop_up_con');
  const showPopUp = document.querySelectorAll('.toform');
 
  showPopUp.forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();  
          formPopUp.classList.add('show');
          body.classList.add('overlay');
      });
  });
   
  closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      formPopUp.classList.remove('show');
      body.classList.remove('overlay'); 
  });
   
  document.addEventListener('click', (e) => {
      if (formPopUp.classList.contains('show') && !form.contains(e.target)) {
          formPopUp.classList.remove('show');
          body.classList.remove('overlay');
      }
  });
   
  form.addEventListener('click', (e) => {
      e.stopPropagation();  
  });document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => { 
            accordionHeaders.forEach(h => {
                if (h !== header) {
                    h.classList.remove("active");
                    h.nextElementSibling.style.display = "none";
                }
            });
 
            const content = header.nextElementSibling;
            header.classList.toggle("active");
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});

const sections = document.querySelectorAll('.wrapper>div');

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

sections.forEach((section, index) => {
  section.style.setProperty('--animation-delay', `${index * 0.1}s`);
  observer.observe(section);
});
 