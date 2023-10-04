function calculateReadTime(text) {
    const amountOfWords = text.split(' ').length;
    const readTime = Math.round(amountOfWords / 100 * 0.3);
    console.log(`Het lezen van ${amountOfWords} woorden kost ${amountOfWords / 100 * 0.3} minuten om te lezen. Afgerond is dat ${readTime} minuten.`);
    return readTime;
}

export default calculateReadTime;