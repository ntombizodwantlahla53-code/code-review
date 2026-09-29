import { Request, Response } from "express";
import * as applicationService from "./../service/applicationService"

export const addApplication = async (req: Request, res:Response) => {
    try {
        const newApplication = await applicationService.createApplication(
            req.body,
            req.user!.id);
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(500).json({ message: "Error in creating application"});
    }
};

export const getAllApplications = async (req: Request, res: Response) => {
    try {
        const applications = await applicationService.findAllApplications();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: "Error retreiving applications"});

    }
};

export const getApplicationById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10)
        const application = await applicationService.findApplicationById(id)
        if(!application){
            return res.status(404).json({ message: "Application not found"})
        }
        return res.status(200).json(application)
    } catch (error) {
        res.status(500).json({message: "error retrieving application"})
    }
};

export const updateApplicationById = async (req:Request, res:Response) =>{
    try{
        const id = parseInt(req.params.id as string, 10)
        const updateApplication = await applicationService.updateApplication(id, req.body)
        if(!updateApplication){
            return res.status(404).json({ message: "Application not found"})
        }
        res.status(200).json(updateApplication);
    }catch (error){
       res.status(500).json({message: "error updating application"})
    }
};

export const deleteApplicationById = async (req:Request, res: Response) =>{
    try{
      const id = parseInt(req.params.id as string, 10);
      const deleteApplication = await applicationService.deleteApplication(id);
      if(!deleteApplication){
            return res.status(404).json({ message: "Application not found"})
        }
        res.status(200).json({message: "Application Deleted Succesfully"});
    }catch (error){
        res.status(500).json({message: "error deleting application"})

    }
};