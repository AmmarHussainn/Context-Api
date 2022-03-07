 export const reducer = (state, action) => {
 
    if (action.type === 'ADD_ITEM') {
      const newPeople = [...state.people, action.payload];
   
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContenet: 'Hello World'
  
      };
  
  
    }
    if (action.type === 'NO_VALUE') {
      return {
        ...state,
        isModalOpen: true,
        modalContenet: 'Please enter a name'
      };
    }
      
    
    if (action.type === 'CLOSE_MODAL') {
      return {
        ...state,
        isModalOpen: false
      };
    }
      
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(person => person.id !== action.payload);
      return {
        ...state,
        people: newPeople
      };
    };
      throw new Error(' No matching action type');
  };