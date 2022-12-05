import { SkillsetInterface } from "~~/models/interfaces/SkillsetInterface";
import { Company } from "./CompanyInterface";
export interface ExperienceInterface {
    company: Company;
    contractType: "work-study program" | "Business internship";
    begining: string;
    duration: number;
    title: string;
    description: string;
    Skillsetlist: SkillsetInterface[];
  }