// تفعيل الوضع الليلي
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// استخراج المعلومات من رابط الصفحة
const params = new URLSearchParams();

// الحصول على العنوان، وإذا لم يكن موجودًا يتم عرض اسم الموقع كعنوان ملون
const title = params.get('title') || '<span style="color: blue;">L3ZAWA</span> <span style="color: purple;">Movies</span>';
const video = params.get('video') || "#";

// إدراج العنوان في الصفحة مع الحفاظ على التلوين
document.getElementById('movieTitle').innerHTML = title;
document.getElementById('movieVideo').src = video;

// قائمة الأفلام (تحميل ديناميكي)
const movies = [
    { title: "Inception", src: "Inception.jpg", video: "Inception.mp4" },
    { title: "Interstellar", src: "Interstellar.jpg", video: "Interstellar.mp4" },
    { title: "Matrix", src: "Matrix.jpg", video: "Matrix.mp4" }
];

const moviesList = document.getElementById('moviesList');

movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');
    movieDiv.innerHTML = `
        <img src="${movie.src}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <button onclick="openPopup('${movie.title}', '${movie.video}')">مشاهدة</button>
    `;
    moviesList.appendChild(movieDiv);
});

// نافذة منبثقة
function openPopup(title, videoSrc) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupVideo').src = videoSrc;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    // استخراج المعلومات من رابط الصفحة
const params = new URLSearchParams(window.location.search);

// الحصول على العنوان والفيديو من الرابط، وإذا لم يكن موجودًا يتم عرض اسم الموقع كعنوان
const title = params.get('title') || '<span style="color: blue;">L3ZAWA</span> <span style="color: purple;">Movies</span>';
const video = params.get('video') || "#";

// تعيين العنوان الملون داخل العنصر
document.getElementById('movieTitle').innerHTML = title;
document.getElementById('movieVideo').src = video;
document.getElementById('streamingLink').href = video;
document.getElementById('downloadLink').href = video;
}


