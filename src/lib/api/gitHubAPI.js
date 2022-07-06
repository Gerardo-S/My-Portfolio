import { Octokit } from "@octokit/rest";

const token = process.env.TOKEN;
const user = process.env.USERAGENT;
const parameters = "?sort=created";

async function getRepos() {
  const octokit = new Octokit({
    auth: token,
    userAgent: user
  });

  let projectCardContent;
  try {
    const response = await octokit.request(`GET /user/repos${parameters}`, {});
    projectCardContent = response.data.map((repoDetails) => {
      const { id, name, description, topics, homepage, html_url } = repoDetails;
      return {
        id,
        title: name,
        description: description,
        technologies: topics,
        deployedURL: homepage,
        gitURL: html_url
      };
    });

    return projectCardContent;
  } catch (error) {
    throw new Error(`An unexpected error has ocurred Error:${error}`);
  }
}

export default getRepos;
