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

const findTags = (selector) => { 
    return Array.from(document.querySelectorAll(selector));
};

const findiFrames = () => {
    return $('iframe').get();
};

const convertTagsToSizeObjects = (tags) => {
    return tags.map((node) => {
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

const isNotHidden = (node) => {
    return !(node.offsetParent === null);
};

const containedInAdSizeArray = (x, y) => {
    return adSizes.some((obj) => {
        return (obj.width === x && obj.height === y);
    });
};

const adSizeFilter = (node) => {
    return containedInAdSizeArray(node.width, node.height);
};

function findAds() { 
    const location = window.location.href;
    const aTags = findTags("a > img");
    const imgTags = findTags("img > a");
    const iframes = findiFrames();
    const allTags = aTags.concat(imgTags).concat(iframes);
    const nonHiddenTags = allTags.filter(isNotHidden);
    const sizeObjects = convertTagsToSizeObjects(nonHiddenTags);
    const sizeFilteredObjects = sizeObjects.filter(adSizeFilter);
    const adObject = {
        location,
        advertisements: sizeFilteredObjects,
    };
    console.log(JSON.stringify(adObject));
}

findAds();
