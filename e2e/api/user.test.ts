import { expect } from 'chai';
import { http } from '../../config/http';

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

describe('Test user API', function () {
  it('Check todo item content', async function () {
    const { data, status } = await http.get<TodoItem>('/todos/1');
    expect(status).to.be.equal(200);
    expect(data).to.deep.equal({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    });
  });

  it('Check post title', async function () {
    const { data, status } = await http.get<PostItem>('/posts/83');
    expect(status).to.be.equal(200);
    expect(data.title).to.include('voluptates doloribus');
  });
});
