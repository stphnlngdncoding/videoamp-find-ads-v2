//find image tags with a tag children
//find a tags with image children
//find all iframes and verify that they are adds(maybe a tags)
//concat img and iframes
//map and to get sizes and positions in an object
//filter by size
//try and verify false positives?

const findATags = () => { Array.from(document.querySelectorAll("a > img")); };
const findImgTags = () => { Array.from(document.querySelectorAll("img > a")); };

function findAds() {
    const aTags = findATags();
    const imgTags = findImgTags();

}

window.onload = findAds();