import { Component } from '@angular/core';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  item: Todo = {text:'', completed:false};
  itemList = [];

  addTodo(){
    this.itemList.push({'text': this.item.text, 'completed': this.item.completed })
    this.item.text = '';
    console.log(this.itemList)
  }

  todoComplete(todo: Todo){
    this.itemList.find(x => x.text == todo.text).completed = true;
    console.log(this.itemList)
  }

  deleteItem(todo: Todo){
    let index = this.itemList.indexOf(todo);
    this.itemList.splice(index, 1);
  }
}
