//find image tags with a tag children
//find a tags with image children
//find all iframes and verify that they are adds(maybe a tags)
//concat img and iframes
//map and to get sizes and positions in an object
//filter by size
//try and verify false positives?
const adSizes = [
    { width: 300, height: 250 },
    { width: 320, height: 260 },
    { width: 300, height: 600 },
    { width: 120, height: 60 },
    { width: 970, height: 90 },
    { width: 88, height: 31 },
    { width: 180, height: 150 },
    { width: 160, height: 600 },
    { width: 728, height: 90 },
    { width: 550, height: 480 },
    { width: 970, height: 250 },
    { width: 250, height: 250 },
    { width: 240, height: 400 },
    { width: 336, height: 280 },
    { width: 300, height: 100 },
    { width: 720, height: 300 },
    { width: 468, height: 60 },
    { width: 234, height: 60 },
    { width: 120, height: 90 },
    { width: 125, height: 125 },
    { width: 120, height: 600 },
];

const findATags = () => { 
    return Array.from(document.querySelectorAll("a > img"));
};
const findImgTags = () => { 
    return Array.from(document.querySelectorAll("img > a"));
};
const findiFrames = () => {
    return $('iframe').get();
};

const convertTagsToSizeObjects = (tags) => {
    return tags.map((node) => {
        if (node.tagName === "A") {
          //get parent img 
        }
        return {
            width: node.clientWidth,
            height: node.clientHeight,
            position: {
                x: node.offsetLeft,
                y: node.offsetTop,
            },
        };
    });
};

const containedInAdSizeArray = (x, y) => {
    return adSizes.some((obj) => {
        return (obj.width === x && obj.height === y);
    })
};

const adSizeFilter = (node) => {
    return containedInAdSizeArray(node.width, node.height);
};

function findAds() { 
    const aTags = findATags();
    const imgTags = findImgTags();
    const iframes = findiFrames();
    const allTags = aTags.concat(imgTags).concat(iframes);
    const sizeObjects = convertTagsToSizeObjects(allTags);
    const sizeFilteredObjects = sizeObjects.filter(adSizeFilter);
    console.log("sizeFilteredObjects", sizeFilteredObjects);
}

findAds();
