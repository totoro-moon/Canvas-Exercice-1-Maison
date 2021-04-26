var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
width = window.innerWidth;
height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// rectancle du corps de la maison
context.fillStyle = "#92d7f3";
context.fillRect(300, 200, 300, 300);
// fenêtre de gauche
context.fillStyle = "#6f7070";
context.fillRect(350, 250, 50, 50);
// fenêtre de droite
context.fillStyle = "#6f7070";
context.fillRect(500, 250, 50, 50);
// porte
context.fillStyle = "#6f7070";
context.fillRect(410, 350, 80, 150);

// triangle pour le toit
context.beginPath();
context.moveTo(450, 100);
context.lineTo(600, 200);
context.lineTo(300, 200);
context.closePath();
context.fillStyle = "#f88949";
context.fill();