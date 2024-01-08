import { Observable } from '@nativescript/core';

export class AvatarModel extends Observable {
  constructor() {
    super();
  }

  onTap(): void {
    // here i need to pass some data to parent (main-page)
    this.notify({
      eventName: 'someCustomEvent',
      object: this, // optional, but usually done so args.object is a reference to the emitting object
      someData: true,
      foo: 'bar',
    });
  }
}
