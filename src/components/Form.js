import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ errors, touched, values, status }) => {
	const [users, setUsers] =useState([]);

	useEffect(() => {
		if(status) {
			setUsers([...users, status])
		}
	}, [status]);
	return (
		<div className='user-form'>
			<h1>Sign-up Form</h1>
			<Form>
				<Field 
					type='text' 
					name='username' 
					placeholder='Username' 
				/>
				{touched.username && errors.username && <p className="error">Please choose a username.</p>}
				<Field 
					type='text' 
					name='email' 
					placeholder='Email' 
				/>
				{touched.email && errors.email && <p className="error">Email address must be valid.</p>}
				<Field 
					type='text'
					 name='password' 
					placeholder='Password' 
				/>
				{touched.password && errors.password && <p className="error">You must choose a password.</p>}
				<label className='checkbox-container'>
					I accept the Terms of Service
					<Field 
						type='checkbox' 
						name='terms' 
						checked={ values.terms } />
				</label>
				<button type="submit">Submit</button>
			</Form>

			{users.map(user => (
				<p key={ user.id }>{ user.username }</p>
			))}
		</div>
	)
}

const FormikUserForm = withFormik({
	mapPropsToValues(values) {
		return {
			username: values.username || '',
			password: values.password || '',
			email: values.email || '',
			terms: values.terms || false,
			users: []
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required(),
		email: Yup.string().email(),
		password: Yup.string().required()
	}),

	handleSubmit(values, { setStatus }) {
		console.log('Form submitted!', )
		axios 
			.post('https://reqres.in/api/users/', values)
			.then(res => {
				setStatus(res.data);
			})
			.catch(err => console.log(err.response));
	}
})(UserForm)

export default FormikUserForm;