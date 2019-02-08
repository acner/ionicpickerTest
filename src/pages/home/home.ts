import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DatePickerDirective],
})
export class HomePage {
  @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);
  public minDate: Date = new Date(2019, 0, 1);
  public maxDate: Date = new Date(2019, 4, 10);
  public disabledDates: Date[] = [new Date(2019, 2, 2),new Date(2019, 1, 15),new Date(2019, 1, 16)]; // año mes dia mes 0 => enero 1=> febrero


  public localeString = {
    monday: true,
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };
  public min: Date = new Date();
  constructor(
    public navCtrl: NavController,
  ) {
    this.initDate = new Date();
  }
  public ngOnInit() {

  }
  public Log(stuff): void {
    this.datepicker.open();
    this.datepicker.changed.subscribe(() => console.log('test'));
    console.log(stuff);
  }

  public event(data: Date): void {
    this.localDate = data ;
  }
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
  }

}
