import { Grid, List } from "@mui/material";
import JobTitles from "../../components/workExperience/JobTitles";
import JobResponsibilities from "../../components/workExperience/JobResponsibilities";

export default function JobItem() {
  return (
    <Grid container spacing={0}>
      <Grid
        item
        sm={12}
        md={3}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <JobTitles />
      </Grid>
      <Grid
        item
        sm={12}
        md={9}
        lg={8}
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <List>
          <JobResponsibilities />
          <JobResponsibilities />
          <JobResponsibilities />
        </List>
      </Grid>
    </Grid>
  );
}
