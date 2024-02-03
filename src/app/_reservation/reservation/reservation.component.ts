// reservation.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  currentMonth: Date = new Date();
  selectedDate!: Date;

  // Nouvelle méthode pour obtenir le nom du mois actuel
  get currentMonthName(): string {
    return this.currentMonth.toLocaleString('default', { month: 'long' });
  }

  // Nouvelle méthode pour obtenir l'année actuelle
  get currentYear(): number {
    return this.currentMonth.getFullYear();
  }

  get daysInMonth(): string[] {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days;
  }

  get datesInMonth(): Date[] {
    const firstDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);

    const dates: Date[] = [];
    for (let d = firstDayOfMonth; d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }

    return dates;
  }


  isDateSelected(date: Date): boolean {
    return this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    console.log('Date sélectionnée:', date);
  }

  previousMonth(): void {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.updateCalendar();
  }

  nextMonth(): void {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.updateCalendar();
  }

  updateCalendar(): void {
    // Ajoutez ici la logique pour mettre à jour les jours du mois actuel
    // ...
  }
}
