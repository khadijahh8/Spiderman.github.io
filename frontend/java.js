//  scroll event listener
//using arrow function
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
//using if , else statement to change transparency 
    if (scrollPosition > 50) {
        navbar.style.backgroundColor = 'rgba(66, 9, 9, 0.7)'; 
    } else {
        navbar.style.backgroundColor = 'rgba(66, 9, 9, 1)'; 
    }
});
//another event listener for class selection
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // for the wave animation
    //selecting the canvas element
    const canvas = document.getElementById("waveCanvas");
    const ctx = canvas.getContext("2d");
    
    // Adjust canvas size to match the container
    canvas.width = window.innerWidth;
    canvas.height = 100;
    
    // Wave properties
    let waveOffset = 0;
    const waveAmplitude = 20; // height 
    const waveFrequency = 0.02; // speed
  
//to draw wave on the canvas
    function drawWave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
    
        for (let x = 0; x < canvas.width; x++) {
            const y =
                canvas.height / 2 +
                Math.sin((x + waveOffset) * waveFrequency) * waveAmplitude;
            ctx.lineTo(x, y);
        }
    
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
    
        // Set wave color
        ctx.fillStyle = "#580d0d"; 
        ctx.fill();
    }
    
    function animateWave() {
        waveOffset += 2; // Adjust speed
        drawWave();
        requestAnimationFrame(animateWave);
    }
    
    // Start animation
    animateWave();
    
    // Resize canvas on window resize
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = 100;
    });
    