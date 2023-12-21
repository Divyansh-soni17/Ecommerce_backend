import express from "express";
import { deleteOrder, getAllOrders, getSingleOrder, myOrder, newOrder, updateOrders } from "../controller/orderController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.post("/order/new",isAuthenticatedUser,newOrder);
router.get("/order/single/:id",isAuthenticatedUser ,getSingleOrder);
router.get("/order/me",isAuthenticatedUser,myOrder);
router.get("/admin/orders",isAuthenticatedUser,authorizeRoles("admin"),getAllOrders);
router.put("/admin/order/:id",isAuthenticatedUser,authorizeRoles("admin"),updateOrders);
router.delete("/admin/order/:id",isAuthenticatedUser,authorizeRoles("admin"),deleteOrder);


export default router;