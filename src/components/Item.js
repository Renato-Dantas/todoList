class Item{
    // Variavel da classe, podendo ser acessada por qualquer objeto criado com esta classe
    static lastId = 0;

    constructor(text){
        this.id = Item.lastId++
        this.text = text;
        this.done = false;
    }
}

export default Item;