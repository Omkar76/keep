export class Note{
  title : string = ""
  body : string = ""
  backgroundImage : string = ""
  backgroundColor : string = ""
  images : string[] = []

  isEmpty(){
    return this.title.trim().length == 0 && this.body.trim().length == 0
  }


}
