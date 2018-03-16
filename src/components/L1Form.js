import React, { Component } from 'react';


export default class L1Form extends Component {
  render() {
    return (
  <div class="container">     
  <p class="col-md-9" > <br/><h3>Schedule L1 round</h3></p>      
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
    <label class="control-label col-sm-3 text-right" for="TestScore">L1 Interviewers:</label>
    <div class="col-sm-9 dropdown">       
    <button class="pull-left btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">L1 Interviewer1
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">L1 Interviewer1</a></li>
      <li><a href="#">L1 Interviewer2</a></li>
      <li><a href="#">L1 Interviewer3</a></li>
    </ul>
  </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="Time">Time:</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="Time" placeholder=" Please enter time"/>
    </div>
  </div>
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="EvaluationSheetURL">Evaluation Sheet URL:</label>
    <div class="col-sm-9"> 
        <input type="file" class="form-control-file" id="EvaluationSheetURL" aria-describedby="fileHelp"/>
    </div>
  </div> 
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="ResumeURL">Resume URL:</label>
    <div class="col-sm-9"> 
        <input type="file" class="form-control-file" id="ResumeURL" aria-describedby="fileHelp"/>
    </div>
  </div>   
  <div class="row form-group">
    <label class="control-label col-sm-3 text-right" for="CommentsL1">Comments for L1:</label>
    <div class="col-sm-9"> 
      <input type="text" class="form-control" id="CommentsL1" placeholder="Comments here..."/>
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

//export default L1Form;
