const {
  organizationController,
} = require("../controllers/organizations.controller");
const { Router } = require("express");
const organizImage = require("../middlewares/organiz.image");

// Вот мидллвейр от организации

const organizImage = require("../middleware/organiz.image");

const router = Router();

router.get("/organization", organizationController.getAllOrganization);
router.post(
  "/organization",
  organizImage.single("img"),
  organizationController.createOrganization
);
router.patch("/organization/:id", organizationController.updateOrganization);
router.delete("/organization/:id", organizationController.deleteOrganization);

module.exports = router;
zz;
