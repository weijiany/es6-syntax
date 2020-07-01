const inject = function (items, sections) {
    let itemsWithNullAsFirstItem = [null, ...items];
    return sections.map(section => ({
        ...section,
        previousItem: itemsWithNullAsFirstItem[section.index + 1]
    })).reduce((items, section) => {
        let index = items.findIndex(item => section.previousItem === item);
        return insert(items, section.content, index)
    }, itemsWithNullAsFirstItem).slice(1)
}

const insert = function (arr, item, index) {
    let left = arr.slice(0, index);
    let right = arr.slice(index, arr.length);
    return [...left, item, ...right];
}

export { inject, insert };
