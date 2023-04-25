import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";
import { SearchProductController } from "./controllers/SearchProductController";
import { SearchCategoryController } from "./controllers/SearchCategoryController";

const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()
const createProductWithExistCategory = new CreateProductWithExistCategory()
const searchProduct = new SearchProductController()
const searchCategory = new SearchCategoryController()

router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle)
router.post("/productCategory", createProductCategory.handle)
router.post("/productCategoryExist", createProductWithExistCategory.handle)
router.get("/product/:id", searchProduct.handle)
router.get("/category/:id", searchCategory.handle)

export { router }