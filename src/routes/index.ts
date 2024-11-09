import { Router } from "express";
import * as pagesController from "../controllers/pagesController"
import * as searchController from "../controllers/searchController";

const router = Router();

router.get("/", pagesController.home);
router.get("/hatchs", pagesController.hatchs);
router.get("/sedans", pagesController.sedans);
router.get("/suvs", pagesController.suvs);
router.get("/pickups", pagesController.pickups);

router.get("/search", searchController.search);
router.get("/search", searchController.searchAdvanced);
router.get("/resposta", searchController.searchAdvancedResponse);


export default router;