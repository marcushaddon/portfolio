import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>

				<div className='center'>
					<div className='signoff'>
						<small>Built by Marcus Haddon 2018</small>
						<div className='icon-row'>
						<a href='https://github.com/marcushaddon'>
							<FontAwesome name='github' />
						</a>
						<a href='https://www.linkedin.com/in/mhaddon'>
							<FontAwesome name='linkedin' />
						</a>
						<a href='mailto:haddon.marcus@gmail.com'>
							<FontAwesome name='envelope' />
						</a>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Footer;