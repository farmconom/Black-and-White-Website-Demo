const images = ['../images/bw-icon.jpg',
                '../images/service-analytics.jpg',
                '../images/service-cloud.jpg',
                '../images/service-love.jpg',
                '../images/team-antonio.jpg',
                '../images/team-justin.jpg',
                '../images/team-mark.jpg'];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
});