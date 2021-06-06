import 'reflect-metadata';

import { Container } from 'typedi';

import UI from './lib/ui';

Container.set('token', 'abcdefg');
const a: UI = Container.get<UI>(UI);

console.log(a.render());