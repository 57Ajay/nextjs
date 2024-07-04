import React from 'react'
type paramsObj = {
  params: {
    all: string[]
  }
}
const Project = ({ params } : paramsObj) => {
  return (
    <div>
      Project {params.all.map((project) => <li key={project}>{project}</li>)}
    </div>
  );
};


export default Project;