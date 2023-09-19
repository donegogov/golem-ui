import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isCollapsed = false;

  ngOnInit() {
  }
  title = 'golem';

  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      this.files.push(item);
      console.log('Name= ' + item.name + ' Size= ' + item.size)
    }
    this.fileDropEl.nativeElement.value = "";
  }
}
