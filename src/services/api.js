const getWords = () => {
    return fetch('https://dev.adalab.es/api/random/word'
    ).then ( response => response.json());
};

export default getWords;