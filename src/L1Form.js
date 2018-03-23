import React, { Component } from 'react';
import TextArea from './components/TextArea/TextArea';
import Select from './components/Select/Select';
import SingleInput from './components/SingleInput/SingleInput';
import UrlInput from './components/UrlInput/urlInput';
import DateTimePicker from './components/DateTimePicker/DateTimePicker';
import PropTypes from 'prop-types'; // ES6


export default class L1Form extends Component{ 
 constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  componentDidMount() {
    fetch('./candidateL1.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.name,
        });
    });
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  } 
    
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      name: '',
      testscore: '',
      l1Interviewers: [],
      time: '',
      evaluationSheetUrl: '',
      resumeUrl: '',
      commentsForL1:''  
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      nameSelection: this.state.nameSelection,
      testscoreSelection: this.state.testscoreSelection,
      l1InterviewersSelection: this.state.l1InterviewersSelection,
      timeSelection: this.state.timeSelection,
      evaluationSheetUrlSelection: this.state.evaluationSheetUrlSelection,
      resumeUrlSelection: this.state.resumeUrlSelection,
      commentsForL1Selection: this.state.commentsForL1Selection 
    };

    console.log('Send this in a POST request:', formPayload)
    this.handleClearForm(e);
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <p></p>
        <h5>L1 Schedule Form</h5>
          <SingleInput
              inputType={'text'}
              title={'Full name'}
              name={'name'}
              controlFunc={this.handleFullNameChange}
              content={this.state.name}
              placeholder={'Type name here'} />  {/* Name text input */}
        
          <SingleInput
              inputType={'text'}
              title={'Test Score'}
              name={'testscore'}
              controlFunc={this.handleTestScoreChange}
              content={this.state.testscore}
              placeholder={'Test Score here'} />  {/* Test Score input */}
        <Select
              name={'l1Interviewers'}
              placeholder={'Select L1 Interviewer'}
              controlFunc={this.handlel1InterviewersSelect}
              options={this.state.l1InterviewersOptions}
              selectedOption={this.state.l1InterviewerSelection} /> {/* Interviewers list select */}
        <DateTimePicker 
              inputType={'date'}
              title={'Test Score'}
              name={'testscore'}
              controlFunc={this.handleTestScoreChange}
              content={this.state.testscore}
              placeholder={'Interview time'} />  {/* Interview time input */}
        
        <UrlInput 
         inputType={'url'}
              title={'Evaluation Sheet URL'}
              name={'evaluationSheetUrl'}
              controlFunc={this.handleEvaluationSheetUrlChange}
              content={this.state.evaluationSheetUrl} />  {/* Evaluation Sheet URL input */}
        <UrlInput 
         inputType={'url'}
              title={'Resume URL'}
              name={'resumeUrl'}
              controlFunc={this.handleResumeUrlChange}
              content={this.state.resumeUrl} />  {/* Resume URL input */}
        <TextArea
          title={'Comments for L1'}
          rows={5}
          resize={false}
          content={this.state.commentsForL1}
          name={'commentsForL1'}
          controlFunc={this.handleCommentsForL1Change}
          placeholder={'Comments here..'} />
        <input
          type="submit"
          className="btn btn-primary btn-submit"
          value="Save"/> &nbsp;
        <button
          className="btn btn-default"
          onClick={this.handleClearForm}> Cancel</button>
      </form>
  );
}
}

//export default L1Form;
