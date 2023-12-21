import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} from "../controller/productController.js";
import {isAuthenticatedUser,authorizeRoles} from "../middleware/auth.js";
const router = express.Router();

router.get("/products",getAllProducts); 
router.get("/admin/products",isAuthenticatedUser,getAdminProducts); 

router.post("/admin/products/new",isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.put("/admin/products/:id",isAuthenticatedUser,authorizeRoles("admin"),updateProducts);
router.delete("/admin/products/delete/:id",isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
router.get("/products/detail/:id", getProductDetails);
router.put("/review",isAuthenticatedUser,createProductReview);
router.get("/reviews",getProductReviews);
router.delete("/reviews",isAuthenticatedUser,deleteReview);


export default router;
