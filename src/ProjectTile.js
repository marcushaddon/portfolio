import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProjectTile extends Component {
    render() {
        const project = this.props.project;
        return (
            <Link to={'/projects/' + project.id}>
                
                <Link to={'/projects/' + project.id}>
                    <div className='project-tile'>
                        <h3>{project.name}</h3>
                        <img src={require('./img/' + project.img)} />
                    </div>
                </Link>
                
            </Link>
        );
    }
}

export default ProjectTile;