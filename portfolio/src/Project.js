import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Model from './Model';

class Project extends Component {
    render() {
        // what
        // const { match: { params } } = this.props;
        // console.log(this.props);
        // console.log(params);

        const projectId = this.props.match.params.project;

        const project = Model.projects.find(
            project => project.id === projectId
        );
        console.log(project);
        return (
            <div>
                <div className='nav-bar'>
                    <div className='brand'>
                        <h3><Link to='/'>MH</Link></h3>
                    </div>
                    
                </div>

                <div className='flex-container'>
                    <div className='project'>

                        <div className='breakdown section'>
                            <h2>{project.name}</h2>
                            <div className='brokendown'>
                                <h4>Technologies</h4>
                                <ul>
                                    {
                                        project.technologies.map(
                                            technology => <li>{technology}</li>
                                        )
                                    }
                                </ul>
                            </div>

                            <div className='brokendown'>
                                <h4>Skills</h4>
                                <ul>
                                    {   
                                        project.skills.map(
                                            skill => <li>{skill}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className='the-gist section'>
                            <div className='lg-pic'>
                                <img src={require('./img/' + project.img)} />
                            </div>

                            {
                                project.gist.map(
                                    paragraph => <p>{paragraph}</p>
                                )
                            }
                            {
                                project.link &&
                                <a className='project-action' href={project.link}>See it in action</a>
                            }
                            
                            
                        </div>

                    </div>
                
                </div>
                
            
            </div>
        );
    }
}

export default Project;