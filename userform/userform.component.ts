import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from '../user-service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit { //controller
  title: string = 'Userform';
  user: User = new User(); // model -stores all form of data
  userArray: any;
  //age:number=25;
  constructor(private userService: UserService) { }
  deleteUser(id:number, index:number){
    const observable = this.userService.delete(id)
    observable.subscribe(response=> this.userArray.splice(index,1))
  }
  save() {
    const observable = this.userService.save(this.user);
    observable.subscribe(response => { // SUCCESS FUNCTION
      console.log(response);
      this.user.id=response;
      alert('user added')
      this.userArray.push(Object.assign({}, this.user));
    },
      error => {
        console.log(error);   //ERROR FUNCTION
        alert('error happened')
      })

    //  console.log('working');
    // console.log(this.user.firstname);
    //this.user.firstname='John';
  }

  // save1(){
  //   console.log(this.age);
  // }

  ngOnInit(): void {
    const observable = this.userService.getAllUsers();
    observable.subscribe(response => {
      console.log(response);
      this.userArray = response;

    });
  }

}
