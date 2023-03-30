const seed = Date.now();
  const [width, height] = [888, 222];
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(width, height);
  const openSimplex = openSimplexNoise(seed);
  const zoom = 8;
  var x, y, index = 0;
  
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      const value = (openSimplex.noise2D(x / zoom, y / zoom) + 1) * 128;
      imageData.data[index++] = value;
      imageData.data[index++] = value;
      imageData.data[index++] = value;
      imageData.data[index++] = 255;
    }
  }
ctx.putImageData(imageData, 0, 0)