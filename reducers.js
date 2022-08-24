
import axios from 'axios';

var apidata,apidata2;
const getCustomersData = () => {
  axios
    .get("https://api.genderize.io/?name=luc")
    .then(data => 
          console.log(data.data),
          apidata=JSON.stringify(data.data),
          console.log(apidata)
    )
    .catch(error => console.log(error));
};
getCustomersData();

export default function reducerFunc(
  state = {
    count: 0,
    json:apidata
  },
  action
) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
