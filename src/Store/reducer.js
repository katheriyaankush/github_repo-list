import * as actionType from './action';
const initialState = {
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
    profile:'',
    projectData:{},
    reserve:[]
    
};

const reducer=(state=initialState,action)=>{



switch (action.type) {
    case actionType.IS_FAV:
      const prodIndex = state.data.findIndex(
        p => p.id === action.id
      );
      const newFavStatus = !state.data[prodIndex].isFavorite;
      const updatedData= [...state.data];
      updatedData[prodIndex] = {
        ...state.data[prodIndex],
        isFavorite: newFavStatus
      };
    return{
        
             ...state,
             data: updatedData
    
    }
        
      case actionType.DATA:
     
     
      return{
         ...state,
         projectData: action.data
      }

      case actionType.SEARCH:
     
     
      return{
         ...state,
         data: action.data
      }

      case actionType.RESERVE:
        const prodIndexR = state.data.findIndex(
          p => p.id === action.id
        );
        const newFavStatusR = !state.data[prodIndexR].isFavorite;
        const updatedDataR= [...state.data];
        updatedDataR[prodIndexR] = {
          ...state.data[prodIndexR],
          isFavorite: newFavStatusR
        };
      return{
          
               ...state,
               reserve: updatedDataR
      
      }


}


return state;

}

export default reducer;