import {Component, Input} from '@angular/core';
import {Note} from "../note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note! : Note

// background : string | null
  // labels : string[]
  // images : string[]
  // showCheckboxes : boolean
  // editedTime: stringgit
}
