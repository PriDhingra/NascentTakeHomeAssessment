import React from 'react';

const FormControl = ({ handleClick, currentStep, steps, formIsValid }) => {
    //Display Controls to go from one page to another
    return (
        <div className="container flex justify-around mt-4 mb-8">
            {
                currentStep !== steps.length ? (
                    <button
                        onClick={() => handleClick()}
                        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""}`}
                    >
                        Back
                    </button>
                ) : ''
            }
            {
                currentStep !== steps.length ? (
                    <button
                        onClick={() => handleClick("next")}
                        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
                    >
                        {currentStep === steps.length - 1 ? "Submit" : "Next"}
                    </button>
                ) : ''
            }
            
        </div>
    );
}

export default FormControl;
