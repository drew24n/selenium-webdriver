import { expect } from 'chai';
import { trelloHttp } from '../../config/http';

const card = {
  name: 'my new card',
  newName: 'updated card',
  idList: '60ec7973f09348111d97605c',
  id: ''
};

before(async () => {
  try {
    const { data, status } = await trelloHttp.post(
      `/1/cards?name=${card.name}&idList=${card.idList}`
    );

    expect(Object.keys(data).length).to.be.equal(34);
    expect(data.name).to.include('my new card');
    expect(status).to.be.equal(200);

    if (data?.id?.length) {
      card.id = data.id;
    }
  } catch (e) {
    console.log(e);
  }
});

describe('Test Trello API methods', function () {
  it('Get card info', async function () {
    const { data, status } = await trelloHttp.get(`/1/cards/${card.id}`);
    expect(Object.keys(data).length).to.be.equal(31);
    expect(data.name).to.contain('my new card');
    expect(status).to.be.equal(200);
  });

  it('Update card name', async function () {
    const { data, status } = await trelloHttp.put(
      `/1/cards/${card.id}?name=${card.newName}`
    );
    expect(Object.keys(data).length).to.be.equal(31);
    expect(data.name).to.contain('updated card');
    expect(status).to.be.equal(200);
  });

  describe('Delete card & verify card is deleted', function () {
    it('Check delete card', async function () {
      const { data, status } = await trelloHttp.delete(`/1/cards/${card.id}`);
      expect(Object.keys(data).length).to.be.equal(1);
      expect(status).to.be.equal(200);
    });

    it('Verify card is deleted', async function () {
      const { status, statusText } = await trelloHttp.get(`/1/cards/${card.id}`, {
        validateStatus: null
      });
      expect(status).to.be.equal(404);
      expect(statusText).to.be.equal('Not Found');
    });
  });
});
