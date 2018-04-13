import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProjectTile extends Component {
    render() {
        const project = this.props.project;
        return (
            <Link to={'/projects/' + project.id}>
                <div className='project-tile'>
                    <h3>{project.name}</h3>
                    <div className='browser-wrapper'>
    
                        <div className='lil-toolbar'>
                            
                            <div className='close button'></div>
                            <div className='minimize button'></div>
                            <div className='maximize button'></div>
                            
                        </div>
                        <div className='browser-window'>
                        
                            <img src={require('./img/' + project.img)} />
                        
                        </div>
                    
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectTile;