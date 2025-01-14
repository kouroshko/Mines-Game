class Box  {
    constructor(id, isBomb, color) {
        this.id = id;
        this.isBomb = isBomb;
    }

    setActive(status){
        this.isBomb = status;
    }
}

export default Box;
