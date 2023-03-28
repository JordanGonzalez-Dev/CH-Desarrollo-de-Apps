export const MAP = {
  API_KEY: "AIzaSyBa4zIto9zvN7-D6S-2LLiIiDaN343emKo",
};

export const URL_GEOCODING = (lat, lng) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAP.API_KEY}`;
