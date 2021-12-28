import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/components/messages/messages.component';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule],
  exports: [MessagesComponent],
})
export class SharedModule {}
