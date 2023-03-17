const images = ['/Black-and-White-Website-Demo/images/bw-icon.jpg',
                '/Black-and-White-Website-Demo/images/service-analytics.jpg',
                '/Black-and-White-Website-Demo/images/service-cloud.jpg',
                '/Black-and-White-Website-Demo/images/service-love.jpg',
                '/Black-and-White-Website-Demo/images/team-antonio.jpg',
                '/Black-and-White-Website-Demo/images/team-justin.jpg',
                '/Black-and-White-Website-Demo/images/team-mark.jpg'];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
});