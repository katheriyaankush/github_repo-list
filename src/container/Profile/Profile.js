import React , {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import   './Profile.css';

import Aux from '../../hoc/Axiliury/Axilury';
import profilePic from '../../Asset/profile.jpg'
import Star from '../../Asset/star1.png';
import * as actionType from '../../Store/action';







class Profile extends Component{

    state={
        data:[ {

            id:1233234,
            name:"Event Management",
            language:"React",
            date: "2 Aug",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for event handling purpose. In this project I used react js with redux "
        } ,
        {
        
            id:123423,
            name:"Project Management",
            language:"Angular",
            date: "5 Aug",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for project handling purpose. In this project I used Angular Js  "
        
        } ,
        {
        
            id:123236,
            name:"My Project App",
            language:"React Js & Redux",
            date: "20 Aug",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for My project App purpose. In this project I used react js with redux "
        } ,
        {
        
            id:1237,
            name:"Smart Drop Down Prject",
            language:"React Js & Redux",
            date: "23 Aug",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for Smart Drop down purpose. In this project I used React js with Redux. "
        } ,
        {
        
            id:124434,
            name:"CRM Appilication ",
            language:"PHP , HTML",
            date: "22 June",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for CRM Application purpose. In this project I used PHP, HTML, CSS.  "
        } ,
        {
        
            id:1245345,
            name:"IVR",
            language:"Javascript",
            date: "1 Sep",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for IVR purpose. In this project I used Javascript."
        } ,
        {
        
            id:1246234,
            name:"Login API",
            language:"PHP",
            date: "2 Sep",
            isFavorite: false,
            createdBy: "Ankush katharia",
            description: " This project created for Login Users purpose. In this project I used PHP "
        } 
        
        ],
        error:false,
        profile: {
        name:"Ankush Katharia",
        login:"katheriyaankush",
        followers: 20,
        following:30,




        },
        searchAdd:'',
        
    };

componentDidMount(){ 
  
   
    
    this.props.onSearch(this.props.data);

    //console.log("CD", this.state.data);
}




 toggleFavHandler = (id) => {
   
  
//     const prodIndex = this.state.data.findIndex(
//         p => p.id === id
//       );
//       const newFavStatus = !this.state.data[prodIndex].isFavorite;
//       const updatedData= [...this.state.data];
//       updatedData[prodIndex] = {
//         ...this.state.data[prodIndex],
//         isFavorite: newFavStatus
//       };

//       this.setState({data:updatedData})

    this.props.onReserveData(id)
  
     this.props.onFavData(id)

 };


  projecthandler =(projectData)=>{
  
     this.props.onData(projectData)
     this.props.history.push('/project_details');


  }


  filterList=(event)=> {
    let value = event.target.value;
    
     
     

    this.setState({searchAdd: event.target.value});

    let dataVal = this.props.reserve, data=[];
console.log(dataVal);
    data = dataVal.filter((dataVal)=>{
        return dataVal.name.toLowerCase().search(value.toLowerCase()) !== -1;
    });

   // console.log("ser",data);
   this.props.onSearch(data);
   if(!value.length){
    this.props.onSearch(this.props.reserve);

  }
   
}




render(){
    

  


  
            
  const elemetData = this.props.data.map((data)=>{ 
            return (
               
                
           <div key = {data.id}  className = {"mianDiv"}>
          <a href="#" ><h2  onClick = {()=>this.projecthandler(data) }  >{data.name}  </h2></a>  
          <div className = {"row"} > <div className = {"col25"} >  <p> {data.language } </p> </div>
            <div className = {"col25"} ><p> Update on {data.date}</p> </div>

            <div>  <button title="Add Favorite List"
          className={!data.isFavorite ? 'heart' : 'heart2'}
          onClick={()=>this.toggleFavHandler(data.id)}
        >
     
        </button>
       
        </div>
         </div>

       
          </div>
      

           )});


    return(
    
    <Aux  >
      
<div className="SearchBox"> <input type="textbox" placeholder="Project Search" value= {this.state.searchAdd} onChange={(e)=>this.filterList(e)}/> </div>
 <div className = {"SideDiv"}>
 
 <img src={profilePic} alt="Profile"/>
    <h3   >{this.state.profile.name}</h3>
    <p>{this.state.profile.login} </p>
    <p><button style={{
  width: "250px",
  fontSize: "20px",
  backgroundColor: "white" ,
  border:"1px solid black"
  }}>Follow</button></p>
    <p>  {this.state.profile.followers}  Followers  . {this.state.profile.following} Following  . <img className={"Star"}  src= {Star} alt="raiting"/>  {this.state.profile.followers}  </p>
  
     
</div>
{elemetData}
      
     </Aux>  



    );
}

}

const onStateToProps= state=>{

    return{

      
        data:state.data,
        reserve:state.reserve
    }
}
const onDispatchToState= dispatch=>{

    return{

       onData:(data)=>dispatch({type:actionType.DATA, data:data}),
       onFavData:(id) => dispatch({type:actionType.IS_FAV, id:id}),
       onSearch:(data)=>dispatch({type:actionType.SEARCH, data:data}),
       onReserveData:(id)=>dispatch({type:actionType.RESERVE, id:id})
    };
};


export default connect(onStateToProps,onDispatchToState)( withRouter( Profile));