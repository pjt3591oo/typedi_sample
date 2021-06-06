import 'reflect-metadata';

import UI from '../lib/ui';
import API from '../lib/api';

class FakeAPI extends API{
  constructor() {
    super();
  }

  getData() {
    return 'data';
  }
}

test('created ui', () => {
  const tempToken = "test token"
  const ui = new UI(tempToken, new FakeAPI());

  const { token, display } = ui.render()

  expect(tempToken).toBe(token);
  expect(display).toBe('data');
});
