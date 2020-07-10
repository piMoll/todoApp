import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  constructor() {}

  add(a: number, b: number) {
    return a + b;
  }
}

@Injectable({ providedIn: 'root' })
export class ItemEventService {
  private itemAddedInternal = new Subject();

  private subscribers: Subscriber[] = [];

  get itemAdded() {
    return this.itemAddedInternal.asObservable();
  }

  addNewItem(item: string) {
    // const allSubscribersToNotify = this.subscribers.filter((x) =>
    //   x.actions.includes(Actions.NewItemAdded)
    // );

    // allSubscribersToNotify.map((x) => x.consumer.eventHappened(item));

    this.itemAddedInternal.next(item);
  }

  registerOnActions(actionsToRegsiter: any[], consumer: OnEvent) {
    this.subscribers.push({ actions: actionsToRegsiter, consumer });
  }
}

export interface OnEvent {
  eventHappened(data: any);
}

export interface Subscriber {
  consumer: OnEvent;
  actions: any[];
}

export enum Actions {
  NewItemAdded,
}
