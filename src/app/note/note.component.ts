import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  noteForm!: FormGroup;
  editForm!: FormGroup;
  noteDetails:any;
  notesData: any = [];
  noteObj: Note = {
    id: '',
    note_title: '',
    note_dec: '',
  };
  constructor(private fb: FormBuilder, private noteService: NoteService , private spinner: NgxSpinnerService) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      decription: ['', Validators.required],
    });
    this.editForm = this.fb.group({
      edit_title: ['', Validators.required],
      edit_decription: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getAllNotes();
  }
  addNote() {
    const { value } = this.noteForm;
    console.log(value);
    this.noteObj.id = '';
    (this.noteObj.note_title = value.title),
      (this.noteObj.note_dec = value.decription);

    this.noteService.addNote(this.noteObj).then((note) => {
      if (note) {
        alert('Note Added Successfull');
        this.noteForm.reset();
      }
    });
  }
  //Get all data from data base
  getAllNotes() {
    this.spinner.show();
    this.noteService.getNotes().subscribe((res: Note[]) => {
      console.log(res);
      this.notesData = res;
      this.spinner.hide();

    });
  }
  //Delet Note
  deleteNote(note: Note) {
    let decision = confirm('Are sure want to delete this note?');
    if (decision == true) {
      this.noteService.deleteNote(note);
    }
  }
//Get All Details
getAllDetails(note:Note){
  this.noteDetails=note
  console.log(this.noteDetails);

}
  //update notes
  updateNote(note: Note) {
    const { value } = this.editForm 
    console.log(value);

    (this.noteObj.id = note.id),
    (this.noteObj.note_title = value.edit_title),
      (this.noteObj.note_dec = value.edit_decription);
      this.noteService.updateNote(note,this.noteObj).then(()=>{
        alert("Note Update successfull")
      })
      this.editForm.reset();
  }
}
