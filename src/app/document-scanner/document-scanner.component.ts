import { Component, OnInit } from '@angular/core';
import Dynamsoft from 'mobile-web-capture';
import { WebTwain } from 'mobile-web-capture/dist/types/WebTwain'; 

@Component({
  selector: 'app-document-scanner',
  templateUrl: './document-scanner.component.html',
  styleUrls: ['./document-scanner.component.css']
})
export class DocumentScannerComponent implements OnInit {
  dwtObject: WebTwain | undefined;

  constructor() { }

  ngOnInit(): void {
    Dynamsoft.DWT.ProductKey = "t0153KQMAAFzm97BAzFmaAN4P0OR9yW5t3IVDsP3gB0b4t/AA8J6ag3Erbn93uHLYhLObvZuJHuLXdkfKbHa33K+nlM8z7sMb0tgwHIPNhB6V6pQ6w6d5mZFmcFPnb+ytO/PGeTGo0xmeMBIb68/YuJl/PWQ/c294wkhs3Myd8fusuf7jR0B7y0wjwxNGYtMyX826Fkoq+AIDc56i";
    Dynamsoft.DWT.ResourcesPath = '/assets/dynamic-web-twain';
    Dynamsoft.DWT.Containers = [{ ContainerId: 'dwtcontrolContainer', Width: 270, Height: 350 }];
    Dynamsoft.DWT.UseLocalService = false;
    Dynamsoft.DWT.Load();
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => { this.onReady(); });
  }

  scanDocument() {
    var showVideoConfigs = {
      scannerViewer:{
        autoDetect:{
          enableAutoDetect: true
        }
      },
      filterViewer: {
        exitDocumentScanAfterSave: true
      }
    };
    if (this.dwtObject) {
      if(!this.dwtObject.UseLocalService) {
        this.dwtObject.Addon.Camera.scanDocument(showVideoConfigs).then(
          function(){
            console.log("Successful!");
          }, function (error) { 
            alert(error.message); 
          }); 
      }
    }
  }

  onReady() {
    this.dwtObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
  }
}
