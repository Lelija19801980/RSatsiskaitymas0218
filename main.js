
function openNewContent() {
    const intro = document.querySelector('.klaseIntro');
    const newContent = document.getElementById('newContent');
    
    intro.style.display = 'none'; 
    newContent.classList.add('show');  
}