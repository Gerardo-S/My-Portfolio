import { Grid, List } from "@mui/material";
import JobTitles from "../../components/workExperience/JobTitles";
import JobResponsibilities from "../../components/workExperience/JobResponsibilities";

export default function JobItem({ content }) {
  const jobDescription = content.description;
  return (
    <Grid container spacing={0}>
      <Grid item sm={12} md={3} lg={4}>
        <JobTitles
          image={content.image}
          title={content.position}
          location={content.location}
          url={content.url}
          period={content.period}
          technologies={content.technologies}
        />
      </Grid>
      <Grid item sm={12} md={9} lg={8}>
        <List sx={{ mb: "4rem", padding: 0 }}>
          {jobDescription.map((details, index) => (
            <JobResponsibilities key={index} responsibilities={details} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
