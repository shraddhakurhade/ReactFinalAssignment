import React, {Component} from "react";
import PropTypes from 'prop-types'; // ES6
{/*export default class UrlInput extends Component{

updateUrl = (event) =>{
  const url = event.target.value;
  this.props.updateUrl(url);
}

    render(){
        return(
        <div>    
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="resumeURL">Resume URL:</label>
            <div class="col-sm-6"> 
                <input type="url" className="form-control" for="resumeURL" value={this.props.value} onchange = {this.updateUrl}
                      placeholder ={this.props.placeholder}/>
            </div>
        </div>     
        <div class="row form-group">
            <label class="control-label col-sm-4 text-right" for="evaluationSheetURL"> Evaluation Sheet URL: </label>
            <div class="col-sm-6"> 
                <input type="url" className="form-control" for="evaluationSheetURL" value={this.props.value} onchange = {this.updateUrl}
                      placeholder ={this.props.placeholder}/>
            </div>
        </div>
        </div>    
        );
    }
}*/}


const UrlInput = (props) => (  
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

//UrlInput.propTypes = {  
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

export default UrlInput; 
