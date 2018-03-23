import React, {Component} from "react";

{/*export default class Select extends Component{
    render(){
        return(
            <div class="row form-group">
                <label class="control-label col-sm-4 text-right" for="l1interviewers">L1 Schedule Interviewers:</label>
                <div class="col-sm-6 dropdown">       
                <button class="pull-left btn btn-primary dropdown-toggle" type="button" id="l1interviewers" data-toggle="dropdown"> Interviewer1
                <span class="caret"></span></button>
                <ul class="dropdown-menu">
                  <li><a href="#"> Interviewer1</a></li>
                  <li><a href="#"> Interviewer2</a></li>
                  <li><a href="#"> Interviewer3</a></li>
                </ul>
              </div>
            </div>
        );
    }
}*/}


const Select = (props) => (  
        <div className="row form-group">
                <label className="control-label col-sm-4 text-right">{props.title}</label>
                <div className="col-sm-6">
                <select
                  name={props.name}
                  value={props.selectedOption}
                  onChange={props.controlFunc}
                  className="form-select">
                  <option value="">{props.placeholder}</option>
                  {props.options.map(opt => {
                    return (
                      <option
                        key={opt}
                        value={opt}>{opt}</option>
                    );
                  })}
                </select>
                </div>
             </div>    
);

//Select.propTypes = {  
//  name: React.PropTypes.string.isRequired,
//  options: React.PropTypes.array.isRequired,
//  selectedOption: React.PropTypes.string,
//  controlFunc: React.PropTypes.func.isRequired,
//  placeholder: React.PropTypes.string
//};

export default Select;  
 