import axios from 'axios';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;


const searchImages = async (term) => {
    let fullUrl = 'https://api.unsplash.com/search/photos';
    const response = await axios.get(fullUrl, {
        headers: {
            Authorization: 'Client-ID ' + accessKey
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};


export default searchImages;

