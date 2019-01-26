import unsplash from './services/unsplash';

function Unsplash(term) {
  try {
    return unsplash(term);
  } catch (error) {
    return error
  }
}

export default Unsplash;
