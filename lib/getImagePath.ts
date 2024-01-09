import placeholderImage from '../assets/image_placeholder.jpg';

const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? 'original' : 'w500'
      }/${imagePath}`
    : placeholderImage;
};

export default getImagePath;
