export type ApplicationStatus = 'Applied' |'Pending' | 'Rejected' | 'Offer';

export interface Application {
    id: number;
    company_name: string;
    job_title: string;
    status: ApplicationStatus;
    Applied_at: Date
};

export type NewApplication = Omit<Application, 'id' | 'Applied_at'>

export type UpDateApplication = Pick<Application, "status">