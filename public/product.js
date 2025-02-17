// Esteban Gonzalez
window.addEventListener('DOMContentLoaded', () => {
    const imageUrls = {
      roja: "/imagenes/camisa_roja.jpg",
      negro: "/imagenes/camisa_negra.jpg",
      azul: "/imagenes/camisa_azul.jpg"
    };
  
    const colorSelect = document.getElementById('color');
    const productImage = document.getElementById('productImage');
    const sizeSelect = document.getElementById('size');
  
    const savedColor = localStorage.getItem('productColor');
    const savedSize = localStorage.getItem('productSize');
  
    if (savedColor && imageUrls[savedColor]) {
      colorSelect.value = savedColor;
      productImage.src = imageUrls[savedColor];
    }
  
    if (savedSize) {
      sizeSelect.value = savedSize;
    }
  
    colorSelect.addEventListener('change', () => {
      const selectedColor = colorSelect.value;
      if (imageUrls[selectedColor]) {
        productImage.src = imageUrls[selectedColor];
      }
    });
  
    document.getElementById('saveProduct').addEventListener('click', () => {
      const selectedColor = colorSelect.value;
      const selectedSize = sizeSelect.value;
      localStorage.setItem('productColor', selectedColor);
      localStorage.setItem('productSize', selectedSize);
      document.getElementById('productMessage').textContent = "¡Selección guardada!";
    });
  });
  