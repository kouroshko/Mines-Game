import Box from "../models/box";
import { useState } from "react";


export const BOXES = [
    new Box("1", false),
    new Box("2", false),
    new Box("3", false),
    new Box("4", false),
    new Box("5", false),
    new Box("6", false),
    new Box("7", false),
    new Box("8", false),
    new Box("9", false),
    new Box("10", false), 
    new Box("11", false),
    new Box("12", false),
    new Box("13", false),
    new Box("14", false),
    new Box("15", false),
    new Box("16", false),
]

function setRandomBoxActive(boxes){
    boxes.forEach(box => box.setActive(false));

    const randomBoxIndex = Math.floor(Math.random() * boxes.length);

    boxes[randomBoxIndex].setActive(true);
}

setRandomBoxActive(BOXES);

console.log(BOXES);

export default setRandomBoxActive;

