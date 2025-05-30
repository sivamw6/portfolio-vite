const GIPHY_API_KEY = "51O7T2NWL2xFdPMiW5zuS0sYVpkT6LYV";

export async function searchGiphy(query) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(
    query
  )}&limit=8&rating=g`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data; // 回傳 GIF 陣列
}
