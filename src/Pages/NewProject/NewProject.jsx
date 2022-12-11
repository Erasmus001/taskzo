/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast';
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'

export const db = {
  projects: []
}

const NewProject = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const projectNameRef = useRef(null)
  const projectDescRef = useRef(null)

  const navigate = useNavigate()

  // * Handle Inputs...
  const handleProjectName = (event) => setProjectName(event.target.value);
  const handleProjectDesc = (event) => setProjectDesc(event.target.value);


  const handleCreateNewProject = (event) => {
    event.preventDefault()

    // * Check if project lists exists in localstorage
    if (!projectName) {
      toast.error('Please add a project name')
      projectNameRef.current.focus()
      return;
    } else if (!projectDesc) {
      toast.error('Please add a project description')
      projectDescRef.current.focus();
      return;
    } else {
      setIsLoading(!isLoading)
      const projects = db.projects;

      setTimeout(() => {
        projects.push(...projects, {
          id: Math.floor(Math.random() * 100),
          projectName: projectName,
          projectDesc: projectDesc,
          colums: [
            {
              id: 1,
              columnName: "Todo",
              tasks: [],
            },
            {
              id: 2,
              columnName: "In Progress",
              tasks: [],
            },
            {
              id: 3,
              columnName: "Stuck",
              tasks: [],
            },
            {
              id: 4,
              columnName: "Completed",
              tasks: [],
            }
          ]
        })
        localStorage.setItem('db', JSON.stringify(db));

        toast.success('Workspace created')
        setTimeout(() => {
          navigate('/dashboard')
          setProjectDesc('')
          setProjectName('')
        }, 3000)
      }, 4000)
      setIsLoading(!isLoading)
    }
  }

  return (
    <div className={styles.create_new_project}>
      <div className={styles.new_project_hd}>
        <h3>Tell us a bit about your project.</h3>
      </div>

      <form autoCapitalize='on'
        autoComplete='on'
        className={styles.new_project_form}
        onSubmit={handleCreateNewProject}
      >
        <div className={styles.form_group}>
          <label htmlFor="projectName">What will you call your project?</label>
          <input type="text"
            name='projectName'
            id='projectName'
            placeholder='Enter your project name'
            value={projectName}
            onChange={handleProjectName}
            minLength={6}
            maxLength={25}
            disabled={isLoading && true}
            ref={projectNameRef}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="projectDesc">What is your project about?</label>
          <textarea
            name='projectDesc'
            id='projectDesc'
            placeholder='What is your project about?'
            value={projectDesc}
            onChange={handleProjectDesc}
            minLength={50}
            maxLength={100}
            rows={5}
            disabled={isLoading && true}
            ref={projectDescRef}
          />
        </div>
        <div className={styles.form_group}>
          <button type='submit' disabled={isLoading && true}>
            {isLoading ? "Creating workspace..." : "Create workspace"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewProject

/*
{
              id: Math.floor(Math.random() * 100),
              projectName: projectName,
              projectDesc: projectDesc,
              colums: [
                {
                  id: 1,
                  columnName: "Todo",
                  tasks: [],
                },
                {
                  id: 2,
                  columnName: "In Progress",
                  tasks: [],
                },
                {
                  id: 3,
                  columnName: "Stuck",
                  tasks: [],
                },
                {
                  id: 4,
                  columnName: "Completed",
                  tasks: [],
                }
              ]
            }

*/