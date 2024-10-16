import {Router} from "express";
import {ProductModel} from "../models/product.model.js"

const router = Router();
// CREAR PRODUCTO

router .post('/', async(req,res)=>{
    try {
        const newProduct = new ProductModel(req.body);
        await product.save();
        res.render('product', {product: newProduct.toObject() });
        return res.status(201).render({ statusCode:201, message: 'Product created successfully' });
    } catch (error) {
        return res.status(500).render('error', { statusCode:505, message: 'Failed to create product' });
    }
});


// OBTENER PRODUCTO POR ID
router.get('/:id', async (req, res) => {
    try {
        const product = await ProductModel.findById (req.params.id);
        if (!product) {
            return res.status(404).render('error', { statusCode: 404, message: 'Page not found' });
        }
        return res.render('product', {product:product});
    } catch (error) {
        return res.status(500).render('error', { statusCode: 500, message: 'Product not found' });
    }
});

router.get('/', async (req, res)=>{
    try {
        const products = await ProductModel.find();
        res.render('products',{products: products.map(product => product.toObject()) })
    } catch (error) {
        return res.status(500).render('error', { statusCode: 500, message: 'Products not found' });
    }
})

//  ELIMINAR PRODUCTO

export default router;