"use client";

import frontendTechnologies from "@/lib/technologies/frontend-technologies";
import backendTechnologies from "@/lib/technologies/backend-technologies";
import devopsAndToolsTechnologies from "@/lib/technologies/devops-and-tools-technologies";
import databasesTechnologies from "@/lib/technologies/databases-technologies";
import SkillsRow from "./SkillsRow";

export default function SkillsSection() {
  return (
    <section>
      <SkillsRow skills={frontendTechnologies} header="Frontend" />
      <SkillsRow skills={backendTechnologies} header="Backend" />
      <SkillsRow skills={devopsAndToolsTechnologies} header="DevOps & Tools" />
      <SkillsRow skills={databasesTechnologies} header="Databases" />
    </section>
  );
}
