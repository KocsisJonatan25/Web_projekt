function openImage(event) {
    // A képforrásának elérése
    const image = event.target;
    const imageSource = image.src;
  
    // Egy új ablak létrehozása a kép nagyításához
    const newWindow = window.open(imageSource, "Image", "width=800,height=600");
  }
  
  // A képre kattintás eseményének hozzárendelése
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("click", openImage);
  });
  