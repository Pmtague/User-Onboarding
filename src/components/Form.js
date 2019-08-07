import React from 'react';

const Form = props => {
	return (
		<form>
			<fieldset>
				<legend>SignUp Form</legend>
				<div>
					<label htmlFor='username'>
						Name 
						<div>
							<input
								type='text'
								name='username'
								placeholder='Username'
								value={}
							/>
						</div>
					</label>
				</div>
				<div>
					<label htmlFor='firstName'>
						First Name 
						<div>
							<input
								type='text'
								name='firstName'
								placeholder='first name'
								value={}
							/>
						</div>
					</label>
				</div>
				<div>
					<label htmlFor='firstName'>
						First Name 
						<div>
							<input
								type='text'
								name='firstName'
								placeholder='first name'
								value={}
							/>
						</div>
					</label>
				</div>
				<div>
					<label htmlFor='firstName'>
						First Name 
						<div>
							<input
								type='text'
								name='firstName'
								placeholder='first name'
								value={}
							/>
						</div>
					</label>
				</div>
			</fieldset>
		</form>
	)
}