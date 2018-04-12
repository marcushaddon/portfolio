import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProjectTile extends Component {
    render() {
        const project = this.props.project;
        return (
            <Link to={'/projects/' + project.id}>
                <div className='project-tile'>
                    <h3>{project.name}</h3>
                    <div class='browser-wrapper'>
    
                        <div class='lil-toolbar'>
                            
                            <div class='close button'></div>
                            <div class='minimize button'></div>
                            <div class='maximize button'></div>
                            
                        </div>
                        <div class='browser-window'>
                        
                            <img src={require('./img/' + project.img)} />
                        
                        </div>
                    
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectTile;