<link rel="stylesheet" href="styles.css">

<div class="gallery-container">
  <div class="main-image-container">
    <img src="./media/path-001/path-001-01.png " alt="Main image" class="main-image" id="mainImage">
  </div>
  <div class="thumbnail-container">
    <img src="./media/path-001/path-001-01.png" alt="Thumbnail 1" class="thumbnail selected" onclick="selectImage(this, './media/path-001/path-001-01.png')">
    <img src="./media/path-001/path-001-02.png" alt="Thumbnail 2" class="thumbnail" onclick="selectImage(this, './media/path-001/path-001-02.png')">
    <img src="./media/path-001/path-001-03.png" alt="Thumbnail 3" class="thumbnail" onclick="selectImage(this, './media/path-001/path-001-03.png')">
  </div>
</div>

<script>
function selectImage(thumbnail, imageSrc) {
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.classList.remove('selected');
  });
  thumbnail.classList.add('selected');
  document.getElementById('mainImage').src = imageSrc;
}
</script>