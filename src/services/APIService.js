export async function authAPI() {
  const url = "https://www.universal-tutorial.com/api/getaccesstoken";
  return await fetch(url, {
    headers: {
      Accept: "application/json",
      "api-token":
        "cmrXSbxpZjND6QqZvVW8DaZ-8oboVddUVTMKwZv_fcEYe1MjSdQHQvMqY3nNjFM-nf4",
      "user-email": "healthyprogramming@gmail.com"
    }
  }).then((response) => response.json());
}

export async function cityAPI(authToken) {
  const url =
    "https://www.universal-tutorial.com/api/cities/Andaman and Nicobar Islands";

  return fetch(url, {
    headers: {
      Authorization: "Bearer " + authToken,
      Accept: "application/json"
    }
  }).then((response) => response.json());
}
//cmrXSbxpZjND6QqZvVW8DaZ-8oboVddUVTMKwZv_fcEYe1MjSdQHQvMqY3nNjFM-nf4
