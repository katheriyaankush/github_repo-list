import React,{Component} from 'react';
import {connect} from 'react-redux';


import './ProjectDetails.css'


class ProjectData extends Component {


render(){


return (

<div className="divProject" > 

<h2 style={{marginLeft:"20px"}}> {this.props.projectData.name} </h2>
<div className = {"row"} >  <label>Language:</label> <p className="Para"  > {this.props.projectData.language } </p></div>
             
             
<div className = {"row"} >    <label>Last Updated:</label> <p className="Para" > {this.props.projectData.date}</p> </div>
<div className = {"row"} >    <label>Created By:</label> <p className="Para"  > {this.props.projectData.createdBy}</p> </div>

<div className = {"row"} >        <label>Description:</label> <p className="Para"  > {this.props.projectData.description}</p> 


</div>
</div>

);


}

}


const onStateToProps=(state)=>{
    return {
        projectData:state.projectData
    }
    }

export default connect ( onStateToProps)  (ProjectData)