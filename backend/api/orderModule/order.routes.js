const express = require("express");
const dao= require("./order.dao");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../../errorMiddleware/auth");

router.route("/new").post(isAuthenticatedUser, dao.newOrder);

router.route("/order/:id").get(isAuthenticatedUser, dao.getSingleOrder);

router.route("/me").get(isAuthenticatedUser, dao.myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), dao.getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), dao.updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), dao.deleteOrder);



module.exports = router;