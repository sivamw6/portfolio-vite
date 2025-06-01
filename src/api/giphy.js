// Giphy API key is now loaded from environment variables
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

/**
 * Search GIFs from Giphy API by keyword.
 * @param {string} query - The search keyword
 * @returns {Promise<Array>} - Array of GIF objects
 */
export async function searchGiphy(query) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(
    query
  )}&limit=8&rating=g`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data; // Return GIF array
}
