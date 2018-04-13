import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Model from './Model';
import FontAwesome from 'react-fontawesome';
import ProjectTile from './ProjectTile';

import './App.css';

class Home extends Component {
  render() {
	const projects = Model.projects;

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
		
				<div className='skills-header'>
					<h2>Skills</h2>
				</div>
		
				<div className='skills section'>
		
					<div className='skills-list'>
						<div className='skill subsection'>
								{
									Model.aboutMe.map(
										para => <p>{para}</p>
									)
								}
						</div>
					</div>
		
					<div className='skills-list'>
						{
							Model.skills.map(
								skill => (
									<div className='skill subsection'>
										<h3>{skill.name}</h3>
										<p>
											{skill.description}
										</p>
									</div>
								)
							)
						}
					</div>
				</div>
		
			</div>
			
			<div className='color-break technologies'>
				<div className='container'>
		
					<div className='technologies section'>
						<h2>Technologies</h2>
						<div className='subsection'>
							{
								Model.technologies.map(
									technology => (
										<div className='technology'>
											<div className='name'>
												<strong>{technology.name}</strong>
											</div>
											<div className='confidence-wrapper'>
												<div 
												className='confidence' 
												style={{width: technology.confidence +'%'}}
												></div>
											</div>
										</div>
									)
								)
							}
						</div>
					</div>

					<div className='technologies section'>
						<h3>Frameworks/Platforms</h3>
						<div className='subsection'>
							{
								Model.frameworks.join(' | ')
							}
						</div>
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
					{/* <Link to='/projects'>more...</Link> */}
				</div>
		
			</div>
		
			
			
		</div>
    );
  }
}

export default Home;
