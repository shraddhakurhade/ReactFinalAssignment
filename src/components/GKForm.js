import React, { Component } from 'react';


export default class GKForm extends Component {
  render() {
    return (
  <div class="container">     
  <p class="col-md-9" > <br/><h3>Schedule GK</h3></p>      
  <form class="col-md-9 form-horizontal">
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="Name">Name:</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="Name" value="User1" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="TestScore">Test Score:</label>
    <div class="col-sm-9"> 
      <input type="text" class="form-control" id="TestScore" value="50" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="L1Result">L1 Result:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="L1Result" value="Pass" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="L1ResultSeniority">L1 Result Seniority:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="L1ResultSeniority" value="Senior Web UI developer" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="L1InterviewTime">L1 Interview Time:</label>
    <div class="col-sm-9"> 
      <input type="text" class="form-control" id="L1InterviewTime" value="3:00PM" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="L1InterviewerName">L1 Interviewer Name:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="L1InterviewerName" value="Interviewer1" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="EvalutionSheetURL">Evaluation Sheet URL:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="EvaluationSheetURL" value="https://docs.google.com/spreadsheets/EvaluationSheet" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="ResumeURL">Resume URL:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="ResumeURL" value="https://docs.google.com/xyz" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="CommentsForL1">Comments for L1:</label>
    <div class="col-sm-9"> 
      <input type="text" class="form-control" id="CommentsForL1" value="xyz" readonly/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="CommentsByL1">Comments by L1:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="CommentsByL1" value="abc" readonly/>
    </div>
  </div>
   <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="TestScore">GK Interviewers:</label>
    <div class="col-sm-9 dropdown">       
    <button class="pull-left btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">GK Interviewer1
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">GK Interviewer1</a></li>
      <li><a href="#">GK Interviewer2</a></li>
      <li><a href="#">GK Interviewer3</a></li>
    </ul>
  </div>
  </div>
  <div class="row">
        <label class="control-label col-sm-3 text-right" for="TestScore">Time:</label>
        <div class='col-sm-9'>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
   </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="CommentsForGK">Comments for GK:</label>
   <div class="col-sm-9"> 
      <input type="text" class="form-control" id="CommentsForGK" Placeholder="Comments for GK here.." />
    </div>
  </div>         
  <div class="row form-group"> 
    <div class="col-sm-9">
      <button type="button" class="btn btn-default"> Cancel</button>&nbsp;&nbsp;    
      <button type="submit" class="btn btn-default">Save</button>
    </div>
  </div>
</form>
</div>        
    );
  }
}

//export default GKForm;
