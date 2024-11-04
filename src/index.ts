import { User } from "./user/User"
import { UserEdit } from "./user/UserEdit"

const rootElement = document.getElementById('root')
const john = User.build({name:"John", age: 20})

// if(rootElement){

//   const userShow = new UserShow (
//     rootElement,
//     john
//   )
//   userShow.render()

//   const userForm = new UserForm (
//     rootElement,
//     john
//   )

//   userForm.render()
// }

if(rootElement){
  const userEdit = new UserEdit(rootElement, john)
  userEdit.render()
  console.log(userEdit);
}

