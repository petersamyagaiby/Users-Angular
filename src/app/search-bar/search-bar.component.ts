import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() sendEmail = new EventEmitter<string>();
  @Output() resetAllData = new EventEmitter<string>();

  @ViewChild('searchBtn') searchBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('resetBtn') resetBtn!: ElementRef<HTMLButtonElement>;

  searchByEmail() {
    const input = (
      document.getElementById('search-bar-input') as HTMLInputElement
    ).value;
    if (!input) {
      return;
    }
    this.sendEmail.emit(input);
    this.resetBtn.nativeElement.style.display = 'block';
    this.searchBtn.nativeElement.style.display = 'none';
  }

  resetData() {
    this.resetBtn.nativeElement.style.display = 'none';
    this.searchBtn.nativeElement.style.display = 'block';
    this.resetAllData.emit('reset');
    (document.getElementById('search-bar-input') as HTMLInputElement).value =
      '';
  }
}
