const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civil = civilImages;
    this.military = militaryImages;
  }

  getRandomCivil() {
    let randomNumber = Math.floor(Math.random() * this.civil.length);
    return this.civil[randomNumber];
  }

  getRandomMilitary() {
    let randomNumber = Math.floor(Math.random() * this.military.length);
    return this.military[randomNumber];
  }

  getAll() {
    return [...this.civil, ...this.military];
  }
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    this.gallery = document.createElement("section");
    document.querySelector("body").appendChild(this.gallery);
  }

  createImageTag(imageUrl) {
    let picture = document.createElement("picture");
    let image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    return picture.appendChild(image);
  }

  paintSingleImage(imageUrl) {
    this.createGallery();
    this.gallery.appendChild(this.createImageTag(imageUrl));
  }

  paintMultipleImages(arrayOfImages) {
    console.log(arrayOfImages);
    arrayOfImages.forEach((imageUrl) => {
      this.createGallery();
      this.gallery.appendChild(this.createImageTag(imageUrl));
    });
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();
