const imgfile = document.getElementById("imgfile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector('.image-preview__image');
const previewDefaultText = previewContainer.querySelector('image-preview__default-text');

imgfile.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const reader = new fileReader();

        previewDefaultText.style.display = 'none';
        previewImage.style.display = 'block';

        reader.addEventListener('load', function () {
            console.log(this);
            previewImage.setAttribute('src', this.result);
        });

        reader.readAsDataURL(file);
    }
})