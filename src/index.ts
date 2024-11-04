import { User } from "./user/User"
import { UserEdit } from "./user/UserEdit"
import { UserList } from "./user/UserList"

const rootElement = document.getElementById('root')
const users = User.buildCollection()

if(rootElement) {
  const editContainer = document.createElement('div')
  editContainer.className = 'edit-container'
  rootElement.appendChild(editContainer)
  const listContainer = document.createElement('div')
  listContainer.className = 'list-container'
  rootElement.appendChild(listContainer)
  users.fetch()
  const userList = new UserList(listContainer, users)
  
  users.on('change', () => {
    userList.render()
    if (users.models.length > 0 && !editContainer.hasChildNodes()) {
      const firstUser = users.models[0]
      let userEdit = new UserEdit(editContainer, firstUser)
      userEdit.render()
    }
  })
  listContainer.addEventListener('userSelected', (event: Event) => {
    const customEvent = event as CustomEvent;
    const selectedUser = customEvent.detail;
    const userEdit = new UserEdit(editContainer, selectedUser);
    userEdit.render();
  });
}

