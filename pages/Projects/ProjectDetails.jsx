import React from "react"
import { Link , useParams , useLocation} from "react-router-dom"
import { getProject } from "../../api"
import { FaEye , FaGithub } from "react-icons/fa";


export default function ProjectDetail(){
    const [project, setProject] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadProjects(){
            setLoading(true)
            try {
                const data = await getProject(id)
                setProject(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div>
            {project && (
                <section className="intro portfolio-intro">
                <h1 className="section__title section__title--intro">
                    {project.name} <strong>web app</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">{project.type}</p>
                <img src={project.imageUrl} alt="" className="intro__img" />
                </section>
                )}
            {project && (
                <div className="portfolio-item-individual">
            <div >
                <Link className="" target="_blank" to={project.github}><FaGithub/> GitHub Repo</Link>
                <Link className="" target="_blank" to={project.urlpath}><FaEye /> Live version</Link>
            </div>
            <p>{project.desc1}</p>
            <p>{project.desc2}</p>
            <p>{project.desc3}</p>
            </div>
                )}

            
            
        </div>
    )




}