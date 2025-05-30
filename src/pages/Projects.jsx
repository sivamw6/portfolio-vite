import { useEffect, useState } from "react";
import * as styles from './Projects.css'
import SlideInAnimation from '../components/features/SlideInAnimation';
import projects from '../api/projects';
import ProjectCard from '../components/features/ProjectCard';

const Projects = () => {
  const [repoData, setRepoData] = useState({});

  useEffect(() => {
    async function fetchRepos() {
      const results = {};
      await Promise.all(projects.map(async (project) => {
        try {
          const res = await fetch(`https://api.github.com/repos/${project.repo}`);
          if (res.ok) {
            results[project.repo] = await res.json();
          }
        } catch (e) {
          console.error('Error fetching repository data:', e);  
        }
      }));
      setRepoData(results);
    }
    fetchRepos();
  }, []);

  return (
    <div className={styles.projects}>
      <h1 className="ms-5 ">Projects</h1>
      <div className={styles.imgBox}>
        {projects.map((project) => (
          <SlideInAnimation key={project.repo}>
            <ProjectCard
              project={project}
              github={repoData[project.repo]}
            />
          </SlideInAnimation>
        ))}
      </div>
    </div>
  )
}

export default Projects;
