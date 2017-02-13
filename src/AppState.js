import { observable } from 'mobx';

const tilesData = [{
    id: 0,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Breakfast',
    author: 'jill111',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 1,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 2,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Camera',
    author: 'Danson67',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 3,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 4,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Hats',
    author: 'Hans',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 5,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Honey',
    author: 'fancycravel',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 6,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Vegetables',
    author: 'jill111',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}, {
    id: 7,
    img: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers-1080x675.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    place: 'באר יעקב',
    coordinates: {
        x: 31.967,
        y: 34.837
    },
    date: new Date(),
    tags: []
}];

class AppState {

    @observable images = [];
    @observable imagesShown = [];


    constructor() {
        // TODO :get real data from a real DB
        this.images = tilesData.slice();
        this.imagesShown = tilesData.slice();
    }

    removeTagFromImage(tagId, imgId) {


        this.images.map((img) => {

            if (img.id === imgId) {
                img.tags = img.tags.filter(function(tg, index) {
                    return tg.index != tagId;
                });
            }
        });
    }

    addTagToImage(tagText, imgId) {

        this.images.map((img) => {

            if (img.id === imgId) {
                img.tags.push({
                    index: img.tags.length + 1,
                    value: tagText
                });
            }
        });

        console.log(this.images);
    }

    filterPhotos(searchtText) {

        this.imagesShown = this.images.filter(img => {
            let matchAnything = false;

            if (
                (img.title.toLowerCase().indexOf(searchtText.toLowerCase()) > -1) ||
                (img.place.toLowerCase().indexOf(searchtText.toLowerCase()) > -1) ||
                (img.author.toLowerCase().indexOf(searchtText.toLowerCase()) > -1)
            ) {
                return true;
            }

            for (var i = img.tags.length - 1; i >= 0; i--) {
                if (img.tags[i].value.toLowerCase().indexOf(searchtText.toLowerCase()) > -1) {
                    return true;
                }
            }

            return false;
        })

    }
}

export default AppState;
