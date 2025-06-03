function typeWriterEffect(element, delay) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
        }
    }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.container', 'container2' );
    containers.forEach(container => {
        typeWriterEffect(container, 0.0001); // Adjust the delay (milliseconds) to control the speed
    });
});