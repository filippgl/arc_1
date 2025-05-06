window.onload = function() {
    const marker = document.querySelector('#cocktail-marker');
    const video = document.querySelector('#cocktail-video').components.material.material.map.image;
    
    // При обнаружении маркера
    marker.addEventListener('markerFound', function() {
        console.log('Маркер найден');
        video.play();
    });
    
    // При потере маркера
    marker.addEventListener('markerLost', function() {
        console.log('Маркер потерян');
        video.pause();
    });
};