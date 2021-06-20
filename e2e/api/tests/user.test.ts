import { expect } from 'chai';
import { jsonPlaceholder } from '../../../config/apiConfig';

interface BaseResponse {
  userId: number;
  id: number;
  title: string;
}

interface TodoItem extends BaseResponse {
  completed: boolean;
}

interface PostItem extends BaseResponse {
  body: string;
}

const todoItem: TodoItem = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

const postTitle = 'odit et voluptates doloribus alias odio et';

describe('Test user API', function () {
  it('Check todo item content', async function () {
    const { data, status } = await jsonPlaceholder.api.get<TodoItem>(
      `${jsonPlaceholder.api.defaults.baseURL}/todos/1`,
    );

    expect(status).to.be.equal(200);
    expect(data).to.deep.equal(todoItem);
  });

  it('Check post title', async function () {
    const { data, status } = await jsonPlaceholder.api.get<PostItem>(
      `${jsonPlaceholder.api.defaults.baseURL}/posts/83`,
    );

    expect(status).to.be.equal(200);
    expect(data.title).to.contain(postTitle);
  });
});
