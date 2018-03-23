import React, {Component} from "react";

{/*export default class SingleInput extends Component{
    render(){
        return(
             <div>
             <div class="row form-group">
                <label class="control-label col-sm-4 text-right" for="name">Candidate Name:</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="name" value="User1" readonly/>
                </div>
             </div>
         
            <div class="row form-group">
                <label class="control-label col-sm-4 text-right" for="testScore">Test Score:</label>
                <div class="col-sm-"> 
                  <input type="text" class="form-control" id="testScore" value="50" readonly/>
                </div>
            </div>
            </div>
        );
    }
}*/} 

const SingleInput = (props) => (      
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

//SingleInput.propTypes = {  
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

export default SingleInput; 