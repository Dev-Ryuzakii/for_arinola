function goToNextPage() {
    window.location.href = 'page2.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const birthdaySong = document.getElementById('birthdaySong');
    if (birthdaySong) {
        birthdaySong.play();
    }
});
