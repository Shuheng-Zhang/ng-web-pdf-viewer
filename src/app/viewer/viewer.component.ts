import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  pdfSrc: '';
  isHide = false;

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(): void {
    const $img: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;

        this.isHide = true;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
