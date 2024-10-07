import React from "react"
import {Link, useSearchParams} from "react-router-dom"
import { getProjects } from "../../api"


export default function Projects(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [projects, setProjects] = React.useState([])
    const [loading , setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
        async function LoadProjects() {
            setLoading(true)
            try {
                const data = await getProjects()
                setProjects(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        LoadProjects()
    }, [])
    const displayedProjects = typeFilter
        ? projects.filter(project => project.type === typeFilter)
        : projects
    
    const projectElements = displayedProjects.map(project =>(
        <div key={project.id} >
            <Link className="portfolio__item"
                to={project.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img className="portfolio__img" src={project.imageUrl} />
            </Link>
        </div>
    ))
    return (
        <>
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
        {projectElements}
        </div>
        </section>
        </>
    )



}