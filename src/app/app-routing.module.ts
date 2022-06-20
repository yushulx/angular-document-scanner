import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentScannerComponent } from './document-scanner/document-scanner.component';

const routes: Routes = [{path: '', component: DocumentScannerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
