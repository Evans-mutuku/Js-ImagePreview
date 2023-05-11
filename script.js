// Get references to the button and file input
const selectImageButton = document.getElementById("select-image-btn");
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");

// Add an event listener to the button that triggers the file input
selectImageButton.addEventListener("click", () => {
  imageInput.click();
});

// Add an event listener to the file input that updates the image preview
imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  // Add an event listener to the reader that updates the image preview when the file is loaded
  reader.addEventListener("load", () => {
    imagePreview.innerHTML = `<img src="${reader.result}" alt="Image preview">`;
  });

  if (file) {
    reader.readAsDataURL(file);
  } else {
    imagePreview.innerHTML = "";
  }
});
