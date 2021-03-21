import { expect } from 'chai';
import { instance } from '../../config/axios';

interface baseResponse {
  userId: number;
  id: number;
  title: string;
}

interface todoItem extends baseResponse {
  completed: boolean;
}

interface postItem extends baseResponse {
  body: string;
}

describe('Test user actions (API)', function () {
  it('Check todo item object content', async function () {
    const res = await instance.get<todoItem>(
      `${instance.defaults.baseURL}/todos/1`
    );

    expect(res.data).to.deep.equal({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    });

    expect(res.status).to.be.equal(200);
  });

  it('Check user objects quantity', async function () {
    const res = await instance.get<Array<Object>>(
      `${instance.defaults.baseURL}/users`
    );

    expect(res.data.length).to.be.equal(10);

    expect(res.status).to.be.equal(200);
  });

  it('Check post title', async function () {
    const res = await instance.get<postItem>(
      `${instance.defaults.baseURL}/posts/83`
    );

    expect(res.data.title).to.contain(
      'odit et voluptates doloribus alias odio et'
    );

    expect(res.status).to.be.equal(200);
  });
});
