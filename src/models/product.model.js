import  mongoose  from "mongoose";

class Product {
    constructor(id, title, description, code, price, status, stock, category, thumbnails) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.code = code;
        this.price = price;
        this.status = status;
        this.stock = stock;
        this.category = category;
        this.thumbnails = thumbnails;
    }
}

const {Schema} = mongoose;

const productSchema = new Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    thumbnails: { type: [String], required: true }
});


/* EJEMPLO PRODUCTO 1

    {
        "id": "1c05ad52-f546-42c8-9300-2f0b138d2b1e",
        "title": "El señor de los anillos: La comunidad del anillo",
        "description": "Primera parte de la trilogía de El señor de los anillos, donde Frodo comienza su travesía para destruir el Anillo Único.",
        "code": "LOTR001",
        "price": 8600,
        "status": true,
        "stock": 7,
        "category": "Fantasía",
        "thumbnails": [
            "./assets/lordofrings1.webp"
        ]
    }

*/

export const ProductModel = mongoose.model('Product', productSchema);
