<style>
  /* Container for the gallery */
  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Large image container with 16:6 aspect ratio */
  .large-image-container {
    width: 100%;
    max-width: 1000px; /* Optional: Set a maximum width */
    position: relative;
    padding-top: 37.5%; /* 16:6 ratio (16 / 6 = 2.666 -> 100 / 2.666 = 37.5%) */
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .large-image-container img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Grid layout for smaller images */
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
  }

  /* Style for each small image */
  .image-grid a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 3px solid transparent; /* Default border */
    transition: border 0.3s ease;
  }

  /* Style for selected image */
  .image-grid input:checked + label {
    border: 5px solid #ccc; /* Gray border for selected image */
  }

  .image-grid img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  /* Optional hover effect */
  .image-grid a:hover {
    border: 3px solid #888;
  }

  /* Hide radio buttons */
  .image-grid input {
    display: none;
  }

  /* Style for labels (which act as clickable images) */
  .image-grid label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
  }

  /* Style for the large image preview */
  .image-grid input:nth-of-type(1):checked ~ .large-image-container img {
    content: url('./media/path-001/path-001-01.png');
  }

  .image-grid input:nth-of-type(2):checked ~ .large-image-container img {
    content: url('./media/path-001/path-001-02.png');
  }

  .image-grid input:nth-of-type(3):checked ~ .large-image-container img {
    content: url('./media/path-001/path-001-03.png');
  }

  .image-grid input:nth-of-type(4):checked ~ .large-image-container img {
    content: url('./media/path-001/path-001-04.png');
  }

  .image-grid input:nth-of-type(5):checked ~ .large-image-container img {
    content: url('./media/path-001/path-001-05.png');
  }
</style>

<div class="gallery-container">
  <!-- Large image display -->
  <div class="large-image-container">
    <img src="./media/path-001/path-001-01.png" alt="Large image" id="largeImage">
  </div>

  <!-- Grid of smaller images -->
  <div class="image-grid">
    <input type="radio" name="gallery" id="image1" checked>
    <label for="image1">
      <img src="./media/path-001/path-001-01.png" alt="Small image 1">
    </label>

    <input type="radio" name="gallery" id="image2">
    <label for="image2">
      <img src="./media/path-001/path-001-02.png" alt="Small image 2">
    </label>

    <input type="radio" name="gallery" id="image3">
    <label for="image3">
      <img src="./media/path-001/path-001-03.png" alt="Small image 3">
    </label>

    <input type="radio" name="gallery" id="image4">
    <label for="image4">
      <img src="./media/path-001/path-001-04.png" alt="Small image 4">
    </label>

    <input type="radio" name="gallery" id="image5">
    <label for="image5">
      <img src="./media/path-001/path-001-05.png" alt="Small image 5">
    </label>
  </div>
</div>
