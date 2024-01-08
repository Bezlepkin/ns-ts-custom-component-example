import { EventData, Page, View } from '@nativescript/core';
import { AvatarModel } from './avatar-view-model';

export function onLoaded(args: EventData) {
  const view = <View>args.object;
  view.bindingContext = new AvatarModel();
}
