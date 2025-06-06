// public/script.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/fortune500'); // Llamada al backend
        const productos = await response.json();

        const lista = document.getElementById('lista-productos');
        productos.forEach(p => {
        const item = document.createElement('li');
        item.textContent = `${p.nombre} - $${p.precio}`;
        lista.appendChild(item);
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
});

// Manejo de errores
window.addEventListener('error', (event) => {
    console.error('Error capturado:', event.message);
});