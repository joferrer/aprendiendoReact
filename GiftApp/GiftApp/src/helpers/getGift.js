export const getGift = async(category) =>{

    const API_KEY = 'ubCacbyejOKgxBtXWGBVcm2Hkx8CWqVF';
    const LIMITS = 10;
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${LIMITS}&q=${category}`;

    const {data} = await (await fetch(URL)).json();
    
    const gift = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        
    }));
    

    return gift;
    
    

}