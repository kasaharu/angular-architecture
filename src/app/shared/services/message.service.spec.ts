import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add()', () => {
    it('service.messages が空の状態で newMessage を追加すると newMessage だけの配列を返す', () => {
      service.messages = [];
      const newMessage = 'message';
      service.add(newMessage);
      expect(service.messages).toEqual(['message']);
    });

    it('service.messages が空でない状態で newMessage を追加すると newMessage が追加された配列を返す', () => {
      service.messages = ['message1'];
      const newMessage = 'message2';
      service.add(newMessage);
      expect(service.messages).toEqual(['message1', 'message2']);
    });
  });

  describe('clear()', () => {
    it('service.messages が空配列を返す', () => {
      service.messages = ['message'];
      service.clear();
      expect(service.messages).toEqual([]);
    });
  });
});
