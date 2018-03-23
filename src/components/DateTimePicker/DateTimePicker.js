import React, {Component} from "react";

{/*export default class DateTimePicker extends Component{
    render(){
        return(
          <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="time">Time:</label>
            <div class="col-sm-6">
              <input type="date" class="form-control" id="time" placeholder=" Please enter time"/>
            </div>
          </div>
        );
    }
}*/}

const DateTimePicker = (props) => (      
            <div className="row form-group">
                <label className="control-label col-sm-4 text-right">{props.title}</label>
                <div className="col-sm-6">
                        <input
                          className="form-control" id="name"
                          name={props.name}
                          type={props.inputType}
                          value={props.content}
                          onChange={props.controlFunc}
                          placeholder={props.placeholder} />
                </div>
             </div>    
);

//DateTimePicker.propTypes = {  
//  inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
//  title: React.PropTypes.string.isRequired,
//  name: React.PropTypes.string.isRequired,
//  controlFunc: React.PropTypes.func.isRequired,
//  content: React.PropTypes.oneOfType([
//    React.PropTypes.string,
//    React.PropTypes.number,
//  ]).isRequired,
//  placeholder: React.PropTypes.string,
//};

export default DateTimePicker; 