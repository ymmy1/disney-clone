const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? 'original' : 'w500'
      }/${imagePath}`
    : '../assets/image_placeholder.jpg';
};

export default getImagePath;
