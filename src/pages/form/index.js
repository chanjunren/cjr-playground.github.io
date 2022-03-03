import React from "react";
import useForm from './formhook.js';

export default function Form() {
	const {state, formInputHandler} = useForm({url: null, body: null, requestType: null});
	

  return (
    <div className="grid justify-center items-center h-screen">
      <h1 className="text-center h-0.5">Enter your http request!</h1>
      <div className="flex-col space-y-2">
        <div className="flex space-x-2">
          <p className="text-center m-auto">URL</p>
          <input id="url" className="border-2 p-1 rounded-md focus:outline-none focus:border-sky-200"
						onInput={(event) => formInputHandler(event.target.id, event.target.value)}/>
        </div>
        <div className="flex space-x-2">
          <p className="text-center m-auto">Request</p>
          <input id="requestType" className="border-2 p-1 rounded-md focus:outline-none focus:border-sky-200"
						onInput={event => formInputHandler(event.target.id, event.target.value)}/>
        </div>
        <div className="flex space-x-2">
          <p className="text-center m-auto">Body</p>
          <input id="body" className="border-2 p-1 rounded-md focus:outline-none focus:border-sky-200"
						onInput={event => formInputHandler(event.target.id, event.target.value)}/>
        </div>
      </div>
    </div>
  );
}
