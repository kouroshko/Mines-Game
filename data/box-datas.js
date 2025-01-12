import Box from "../models/box";
import { useState } from "react";


export const BOXES = [
    new Box("1", false, "red"),
    new Box("2", false, "blue"),
    new Box("3", false, "green"),
    new Box("4", false, "yellow"),
    new Box("5", false, "purple"),
    new Box("6", false, "orange"),
    new Box("7", false, "pink"),
    new Box("8", false, "brown"),
    new Box("9", false, "gray"),
    new Box("10", false, "red"), 
    new Box("11", false, "blue"),
    new Box("12", false, "green"),
    new Box("13", false, "yellow"),
    new Box("14", false, "purple"),
    new Box("15", false, "orange"),
    new Box("16", false, "pink"),
]

function setRandomBoxActive(boxes){
    boxes.forEach(box => box.setActive(false));

    const randomBoxIndex = Math.floor(Math.random() * boxes.length);

    boxes[randomBoxIndex].setActive(true);
}

setRandomBoxActive(BOXES);

console.log(BOXES);

export default setRandomBoxActive;

