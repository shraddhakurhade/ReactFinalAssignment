import React, {Component, PropTypes} from "react";
//import PropTypes from 'prop-types'; // ES6


{/*export default class TextArea extends Component{
    render(){
        return(
            <div class="row form-group">
                <label class="control-label col-sm-4 text-right" for="commentsL1">Comments for Candidate:</label>
                <div class="col-sm-6"> 
                  <input type="text" class="form-control" id="commentsL1" placeholder="Comments here..."/>
                </div>
            </div>
        );
    }
}*/}
    
const TextArea = (props) => (  
  <div className="row form-group">
    <label className="control-label col-sm-4 text-right">{props.title}</label>
    <div className="col-sm-6"> 
    <textarea
      className="form-control"
      style={props.resize ? null : {resize: 'none'}}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
    </div>
  </div>    
);

/*{TextArea.propTypes = {  
  //title: React.PropTypes.string.isRequired,
  rows: PropTypes.any.isRequired,
  name: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  resize: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  controlFunc: React.PropTypes.func.isRequired
};}*/

export default TextArea;
//export default TextArea;  