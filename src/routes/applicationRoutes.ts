import { Router } from "express";
import { addApplication, getAllApplications, getApplicationById ,updateApplicationById, deleteApplicationById} from "../controllers/applicationControllers";

const router = Router();

router.post('/applications', addApplication);
router.get('/applications', getAllApplications);
router.get('/applications/:id', getApplicationById);
router.put('/applications/:id', updateApplicationById);
router.delete('/applications/:id', deleteApplicationById);

export default router;