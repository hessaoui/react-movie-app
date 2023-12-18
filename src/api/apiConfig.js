const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '281097e6e67e3bf5027817964222700b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;