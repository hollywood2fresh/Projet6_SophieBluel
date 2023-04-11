function readURL(input) {
    if(input.files && input.files[0]) {
        let reader = new FileReader()

        reader.onload = function(e) {
            const img = document.querySelector('.js-selectImageForm')
            const label = document.querySelector('.file')
            img.src = e.target.result
            img.classList.remove('js-selectImageForm-none')
            label.classList.remove('js-file')
            label.classList.add('file-none')
        }
        reader.readAsDataURL(input.files[0])
    }
}