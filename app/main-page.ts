import { EventData, GestureEventData, Page } from '@nativescript/core';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel();

  const avatar = page.getViewById('avatar');
  console.log(avatar);
  avatar.addEventListener('someCustomEvent', (event) => {
    console.log('Yea1!');
  });

  avatar.on('someCustomEvent', (event) => {
    console.log('Yea!');
  })
}
