import axios from 'axios';
import { expect } from 'chai';

it('check todo item values', async function () {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

  expect(res.data).to.deep.equal({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  });
});
