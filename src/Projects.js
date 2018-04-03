import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Model from './Model';

import ProjectTile from './ProjectTile';

class Projects extends Component {
    render() {
        let projects = [];
        Object.keys(Model.projects).forEach(
            key => projects.push(Model.projects[key])
        );
        console.log("redering")
        return (
            <div className="">
                <div className='splash'>
                    <div className='valign center-on-small'>
                        <h1>Marcus Haddon</h1>
                        <h3>Software Developer.</h3>
                        <div className='icon-row'>
                            <a href='https://github.com/marcushaddon'>
                                <FontAwesome name='github' size='2x' />
                            </a>
                            <a href='https://www.linkedin.com/in/mhaddon'>
                                <FontAwesome name='linkedin' size='2x' />
                            </a>
                            <a href='mailto:haddon.marcus@gmail.com'>
                                <FontAwesome name='envelope' size='2x' />
                            </a>
                            
                        </div>
                        
                        
                    </div>
                </div>
            

                <div className='container'>
            
                    <div className='portfolio section'>
                        <h2>Portfolio</h2>
                        <div className='spaced-row center-on-small subsection'>
                            {
                                projects.map(
                                    project => <ProjectTile project={project} />
                                )
                            }
                        </div>
                        <Link to='/'><FontAwesome name='arrow-left' size='2x' /></Link>
                    </div>
            
                </div>
            
                
                
            </div>
        );
      }
}

export default Projects;