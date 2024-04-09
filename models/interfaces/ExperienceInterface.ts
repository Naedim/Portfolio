import type { Company } from "./CompanyInterface";
import type { SkillDomainInterface } from "./SkillDomainInterface";

export interface ExperienceInterface {
    company: Company;
    contractType: "work-study program" | "Business internship";
    begining: string;
    duration: string;
    title: string;
    description: string;
    skillDomainList: SkillDomainInterface[];
  }