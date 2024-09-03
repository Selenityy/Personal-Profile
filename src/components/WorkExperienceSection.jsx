import React from "react";
import WorkExperienceEntry from "./WorkExperienceEntry";

const WorkExperienceSection = () => {
  return (
    <div>
      <h2>Work Experience</h2>
      <WorkExperienceEntry
        title="Director of Product Management"
        company="Wisdom Gaming, Minneapolis MN"
        startDate="2022-07"
        endDate="2022-09"
        responsibilities={[
          "Led cross-functional teams to develop and implement new workflows and process documentation, reducing project timelines by 30% and enhancing collaboration.",
          "Managed high-impact events with budgets ranging from $20K to $2M, overseeing teams and coordinating with stakeholders to ensure successful execution.",
          "Collaborated with executive leadership to assess and prioritize strategic initiatives, aligning them with financial objectives and improving decision-making.",
        ]}
      />
      <WorkExperienceEntry
        title="Senior Brand Manager"
        company="Wisdom Gaming, Minneapolis MN"
        startDate="2021-12"
        endDate="2022-06"
        responsibilities={[
          "Managed and mentored a team of 8 product managers, leading to a 50% increase in team performance and brand visibility internally and externally.",
          "Partnered with Marketing, Product, and Operations teams to define brand voice and execute marketing strategies, resulting in successful brand launches.",
          "Streamlined project workflows and enhanced cross-team communication, improving project delivery efficiency and quality by 100%.",
        ]}
      />
      <WorkExperienceEntry
        title="Project Manager"
        company="Wisdom Gaming, Minneapolis MN"
        startDate="2020-12"
        endDate="2021-12"
        responsibilities={[
          "Directed multiple concurrent projects, coordinating timelines, resources, and client communications to ensure on-time and on-budget delivery.",
          "Established and facilitated weekly project syncs and client meetings, improving transparency and alignment, and reducing project delays.",
          "Optimized project budgets ranging from $20K to $30K, refining reporting processes and enabling data-driven decision-making for executive leadership.",
        ]}
      />
    </div>
  );
};

export default WorkExperienceSection;
