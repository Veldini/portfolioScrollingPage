function ImageCollection(images) {
    this.images = images;
    this.i = 0;
    this.next = function (imgId) {
        var img = document.getElementById(imgId);
        this.i++;
        if (this.i == images.length)
            this.i = 0;
        img.src = images[this.i];
    }
    this.prev = function (imgId) {
        var img = document.getElementById(imgId);
        this.i--;
        if (this.i <= 0)
            this.i = images.length - 1;
        img.src = images[this.i];
    }
}
//eva
var ic0 = new ImageCollection(
    ["imgs/eva.jpg", "imgs/peanut1.jpg", "imgs/peanut2.jpg"]
);
//co-visit
var ic1 = new ImageCollection(
    ["imgs/onslieve.jpg", "imgs/covisit.jpg"]
);
//why did
var ic2 = new ImageCollection(
    ["imgs/peanut.jpg", "imgs/peanut1.jpg", "imgs/peanut2.jpg"]
);
//famgem
var ic3 = new ImageCollection(
    ["imgs/peanut.jpg", "imgs/peanut1.jpg", "imgs/peanut2.jpg"]
);
//mini
var ic4 = new ImageCollection(
    ["imgs/minime.jpg"]
);