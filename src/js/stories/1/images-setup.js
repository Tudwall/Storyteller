import trees from "../../../images/dnd/1.1/trees.svg";
import building from "../../../images/dnd/1.1/building.svg";
import house from "../../../images/dnd/1.1/house-red.svg";
import pond from "../../../images/dnd/1.1/pond.svg";
import newspaper from "../../../images/dnd/1.2/newspaper.svg";
import paper from "../../../images/dnd/1.2/paper.svg";
import fabric from "../../../images/dnd/1.2/fabric.svg";
import book from "../../../images/dnd/1.2/book.svg";
import kitePink from "../../../images/dnd/1.3/kite-pink.svg";
import kiteRainbow from "../../../images/dnd/1.3/kite-rainbow.svg";
import kiteOrange from "../../../images/dnd/1.3/kite-orange.svg";
import kiteBlue from "../../../images/dnd/1.3/kite-blue.svg";
import houseRed from "../../../images/dnd/1.4/house-red.svg";
import buildingPink from "../../../images/dnd/1.4/building-pink.svg";
import hospital from "../../../images/dnd/1.4/hospital.svg";
import houseBlue from "../../../images/dnd/1.4/house-blue.svg";
import ladder from "../../../images/dnd/1.5/ladder.svg";
import hammer from "../../../images/dnd/1.5/hammer.svg";
import rope from "../../../images/dnd/1.5/rope.svg";
import stairs from "../../../images/dnd/1.5/stairs.svg";

const chapterOneImages = [
  { cssClass: "drop-container", url: trees },
  { cssClass: "right drag-item-1", url: trees },
  { cssClass: "wrong drag-item-2", url: building },
  { cssClass: "wrong drag-item-3", url: house },
  { cssClass: "wrong drag-item-4", url: pond },
];

const chapterTwoImages = [
  { cssClass: "drop-container", url: newspaper },
  { cssClass: "right drag-item-1", url: newspaper },
  { cssClass: "wrong drag-item-2", url: paper },
  { cssClass: "wrong drag-item-3", url: fabric },
  { cssClass: "wrong drag-item-4", url: book },
];

const chapterThreeImages = [
  { cssClass: "drop-container", url: kiteRainbow },
  { cssClass: "right drag-item-1", url: kiteRainbow },
  { cssClass: "wrong drag-item-2", url: kitePink },
  { cssClass: "wrong drag-item-3", url: kiteOrange },
  { cssClass: "wrong drag-item-4", url: kiteBlue },
];

const chapterFourImages = [
  { cssClass: "drop-container", url: houseRed },
  { cssClass: "right drag-item-1", url: houseRed },
  { cssClass: "wrong drag-item-2", url: buildingPink },
  { cssClass: "wrong drag-item-3", url: hospital },
  { cssClass: "wrong drag-item-4", url: houseBlue },
];

const chapterFiveImages = [
  { cssClass: "drop-container", url: ladder },
  { cssClass: "right drag-item-1", url: ladder },
  { cssClass: "wrong drag-item-2", url: hammer },
  { cssClass: "wrong drag-item-3", url: rope },
  { cssClass: "wrong drag-item-4", url: stairs },
];

export {
  chapterOneImages,
  chapterTwoImages,
  chapterThreeImages,
  chapterFourImages,
  chapterFiveImages,
};
