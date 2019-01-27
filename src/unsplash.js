import unsplash from './services/unsplash.js';

function Unsplash(term) {
  try {
    return unsplash(term);
  } catch (error) {
    return error
  }
}

export default Unsplash;
