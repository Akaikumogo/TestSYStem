 const ManagementReducer = (state:any, action:any) => {
    switch (action.type) {
      case "SET_CASHFLOW_DATA":
        return action.payload;   
        
      default:
        return state;
    }
  }

  export default ManagementReducer