import { HasId } from "../interfaces/HasId.interface"
import { Model } from "../model/Model"

export abstract class View<T extends Model<P>, P extends HasId> {

  regions: {[key: string] : Element} = {}

  constructor(
    public parent: Element,
    public model: T
  ){
    this.bindModel()
  }

  eventsMap() : {[key: string] : () => void} {
    return{}
  }
  abstract template() : string

  regionsMap() : {[key: string] : string}{
    return{}
  }

  bindModel() {
    this.model.on('change',  () =>{
      this.render()
    })
  }

  bindRegions(fragment: DocumentFragment) {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)

      if(element) {
        this.regions[key] = element
      }
    }
  }

  bindEvents(fragment: DocumentFragment){
    const eventsMap = this.eventsMap()

    for(let eventKey in eventsMap) { //click:button
      const[eventName, selector] = eventKey.split(':') // ['click', 'button']
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }
  onRender(): void{}

  render() {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.bindRegions(templateElement.content)
    this.parent.append(templateElement.content)
    this.onRender()
  }
}