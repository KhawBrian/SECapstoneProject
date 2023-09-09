document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#show-login").addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
    });
});

/*
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".img-slide");
    const navButtons = document.querySelectorAll(".nav-btn");
    let currentSlide = 0;

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
                navButtons[index].classList.add("active");
            } else {
                slide.classList.remove("active");
                navButtons[index].classList.remove("active");
            }
        });
    }

    // Fungsi untuk pindah ke slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Fungsi untuk memulai otomatisasi
    function startAutoSlide() {
        setInterval(nextSlide, 8000); // Ganti slide setiap 8 detik
    }

    // Event listener untuk tombol navigasi
    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
            currentSlide = index;
        });
    });

    // Memulai otomatisasi slide
    startAutoSlide();
}); */


/*const navButtons = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btn.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav
        });
    });

}*/

/*
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.img-slide');
    const contents = document.querySelectorAll('.content');
    const navButtons = document.querySelectorAll('.nav-btn');

    let currentSlide = 0;
    let autoSlideInterval; // Variabel untuk menyimpan interval otomatisasi

    function showSlide(slideIndex) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        contents.forEach((content) => {
            content.style.display = 'none';
        });

        navButtons.forEach((button) => {
            button.classList.remove('active');
        });

        slides[slideIndex].style.display = 'block';
        contents[slideIndex].style.display = 'block';
        navButtons[slideIndex].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 8000); // Ganti slide setiap 8 detik
    }

    // Event listener untuk tombol navigasi
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
            currentSlide = index;
            clearInterval(autoSlideInterval); // Hentikan otomatisasi saat tombol navigasi diklik
        });
    });

    showSlide(currentSlide);

    // Memulai otomatisasi slide saat halaman dimuat
    startAutoSlide();
});
*/

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".img-slide");
    const navButtons = document.querySelectorAll(".nav-btn");
    const contents = document.querySelectorAll(".content");
    let currentSlide = 0;

    // Fungsi untuk menampilkan slide tertentu
    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
                navButtons[index].classList.add("active");
            } else {
                slide.classList.remove("active");
                navButtons[index].classList.remove("active");
            }
        });

        // Menampilkan elemen .content yang sesuai dengan slide yang sedang aktif
        contents.forEach((content, index) => {
            if (index === slideIndex) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }

    // Fungsi untuk pindah ke slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Fungsi untuk memulai otomatisasi
    function startAutoSlide() {
        setInterval(nextSlide, 8000); // Ganti slide setiap 8 detik
    }

    // Event listener untuk tombol navigasi
    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
            currentSlide = index;
        });
    });

    // Memulai otomatisasi slide
    startAutoSlide();
});
