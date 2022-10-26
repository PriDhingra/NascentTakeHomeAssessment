import React, { useState, useEffect } from 'react';

import { UserDetailsContext } from './contexts/UserDetailsContext';
import FormSteps from './components/FormSteps';
import FormControl from './components/FormControl';
import UserInformation from './components/Steps/UserInformation';
import SelectPokemon from './components/Steps/SelectPokemon';
import Review from './components/Steps/Review';
import Thanks from './components/Steps/Thanks';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

	//Store the state of the application
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState('');
	const [finalData, setFinalData] = useState([]);
	const [formIsValid, setFormIsValid] = useState(false);

	//Steps in the form
	const steps = [
		"User Information",
		"Select Your Pokemon",
		"Review",
		"Thanks"
	];

	//Function called once the component is loaded
	useEffect(() => {
		setUserData({
			firstname: localStorage.getItem("nascent_firstname"),
			lastname: localStorage.getItem("nascent_lastname"),
			address: localStorage.getItem("nascent_address"),
			phonenumber: localStorage.getItem("nascent_phonenumber"),
			pokemon: localStorage.getItem("nascent_pokemon")
		})
	}, [])

	//Display Step in the component
	const displayStep = (step) => {
		switch (step) {
			case 1:
				return <UserInformation />
			case 2:
				return <SelectPokemon />
			case 3: 
				return <Review />
			case 4:
				return <Thanks />
		
			default:
				break;
		}
	}

	//Funtion to handle the click and submit button
	const handleClick = (direction) => {

		//Validate user information fields
		if (currentStep === 1) {
			if (
				userData["firstname"] === undefined ||
				userData["lastname"] === undefined ||
				userData["phonenumber"] === undefined ||
				userData["address"] === undefined ||
				userData["firstname"] === null ||
				userData["lastname"] === null ||
				userData["phonenumber"] === null ||
				userData["address"] === null
			) {
				setFormIsValid(false);
				toast("All fields are mandatory");
			} else if (isNaN(userData["phonenumber"])) {
				setFormIsValid(false);
				toast("Phone Number should only contains digits");
			} else if (userData["phonenumber"].length !== 10) {
				setFormIsValid(false);
				toast("Phone Number should contain only 10 digits");
			} else {
				setFormIsValid(true);
				let newStep = currentStep;
				direction === "next" ? newStep++ : newStep--;
				newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);	

				localStorage.setItem("nascent_firstname", userData["firstname"]);
				localStorage.setItem("nascent_lastname", userData["lastname"]);
				localStorage.setItem("nascent_phonenumber", userData["phonenumber"]);
				localStorage.setItem("nascent_address", userData["address"]);
			}
		} else if (currentStep === 2) {
			if ((userData["pokemon"] === undefined || userData["pokemon"] === null) && direction === "next") {
				toast("Please select the Pokemon");
				setFormIsValid(false);
			}
			else {
				setFormIsValid(true);
				let newStep = currentStep;
				direction === "next" ? newStep++ : newStep--;
				newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
				if(direction === "next")
					localStorage.setItem("nascent_pokemon", userData["pokemon"]);
			}
		} else {
			let newStep = currentStep;
			direction === "next" ? newStep++ : newStep--;
			newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
		}

		
	}

	return (
		<div className="shadow-xl rounded-2xl pb-2 bg-white md:w-1/2 mx-auto">
			{/* Display steps in the form */}
			<div className="container horizontal mt-5">
				<FormSteps
					steps={steps}
					currentStep={currentStep}	
				/>
			</div>
			
			{/* Display form based on the state of application */}
			<div className='my-10 p-10'>
				<UserDetailsContext.Provider value={{
					userData,
					setUserData,
					finalData,
					setFinalData
				}}>
					{displayStep(currentStep)}			
				</UserDetailsContext.Provider>
			</div>
				
			{/* Form Controls to go back and forth */}
			<div>
				<UserDetailsContext.Provider value={{
					userData
				}}>
					<FormControl
						handleClick={handleClick}
						currentStep={currentStep}
						steps={steps}	
						formIsValid	
					/>
				</UserDetailsContext.Provider>
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</div>
		</div>
	);
}

export default App;
