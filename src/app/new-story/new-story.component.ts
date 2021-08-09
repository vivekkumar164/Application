//import { UserService } from '@app/_services';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { UserService } from '../_services';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css']
})
export class NewStoryComponent implements OnInit {
  productForm = this.fb.group({});
  formSubmitted =false;
  public ProductHeader = [{ name: 'AVAILABLE' }, { name: 'BUSY' }, { name: 'OFFLINE' }, { name: 'AWAY' }];
  public ProductHeader1 = [{ name: 'English' }, { name: 'Spanish' }, { name: 'Portuguese' }, { name: 'Russian' }, { name: 'French' }, { name: 'Dutch' }];
  constructor(private fb: FormBuilder,
    private userservice:UserService) {

  }

  sizeFlag : boolean;
  addItem() {
    this.sizeFlag=false;
    this.minSizeFlag=false;
    let control = new FormControl('');

    if((<FormArray>this.productForm.controls['skillSet']).length > 5){
      this.sizeFlag=true;
    }else{
      (<FormArray>this.productForm.controls['skillSet']).push(control)
      this.sizeFlag=false;
    }
  }
  minSizeFlag:boolean
  removeFormInput(i){
    this.sizeFlag=false;
    this.minSizeFlag=false;
    if(i==0){
      this.minSizeFlag=true;
    }else{
      this.minSizeFlag=false;
      (<FormArray>this.productForm.get('skillSet')).removeAt(i);
    }

   }
   public toBeDeleted:any=[];

   deleteValue(obj:any){
     this.toBeDeleted.push(obj);
    }


    save(productForm){
      console.log(productForm.value);
      let payload={"article":{
        "title":productForm.value.title,
         "description":productForm.value.description,
          "body":productForm.value.body,
           "tagList":productForm.value.skillSet
          }}

          this.userservice.postArticle(payload).subscribe(data=>{
            if(data){
              console.log('article posted:',data);
            }
          },err=>{
            console.log('err',err);
          })
    }
  ngOnInit(): void {
    this.productForm.addControl('title', new FormControl('', [Validators.required]));
    this.productForm.addControl('description', new FormControl('', [Validators.required]));
    this.productForm.addControl('body', new FormControl('', [Validators.required]));
    this.productForm.addControl('skillSet', new FormControl('', [Validators.required]));



    this.productForm = new FormGroup({

      'title' : new FormControl(null,Validators.required),
      'description' : new FormControl(null,Validators.required),
      'body' : new FormControl(null,Validators.required),
      'skillSet' : new FormArray([
         new FormControl(null)
      ])

    })


  }

}
