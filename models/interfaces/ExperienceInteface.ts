
import { Company } from "./CompanyInterface";
import { SkillDomainInterface } from "./SkillDomainInterface";
export interface ExperienceInterface {
    company: Company;
    contractType: "work-study program" | "Business internship";
    begining: string;
    duration: string;
    title: string;
    description: string;
    skillDomainList: SkillDomainInterface[];
  }