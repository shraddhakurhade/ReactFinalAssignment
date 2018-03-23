import React, { Component } from "react";
import TextArea from './components/TextArea/TextArea';
import Select from './components/Select/Select';
import SingleInput from './components/SingleInput/SingleInput';
import UrlInput from './components/UrlInput/urlInput';
import DateTimePicker from './components/DateTimePicker/DateTimePicker';
import PropTypes from 'prop-types'; // ES6

export default class GKForm extends Component{
    render(){
        return(
            <form className = "container" onSubmit={this.handleFormSubmit}>
                <h5>G K Interview</h5>
                <SingleInput/> //Name
                <SingleInput/>  //Test Score
                <SingleInput/>  //L1 Result
                <SingleInput/>  //l1 Result Seniority
                <DateTimePicker/>//l1 Interview Time
                <Select/>   //l1 Interview Name
                <SingleInput/> // l1 Interview Email
                <SingleInput/> //l1 Evaluation sheet Url
                <SingleInput/> //Resume Url
                <TextArea/>     //Comments for L1
                <TextArea/>     //Comments by l1
                <Select/> // GK Interviewer Name
                <DateTimePicker/>    // Time DateTimePicker
                <TextArea/> // Comments for GK

            </form>
        );
    }
}

