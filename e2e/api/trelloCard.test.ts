import { expect } from 'chai';
import { trelloHttp } from '../../config/http';

describe('Test trello API methods', function () {
  const card = {
    name: 'my new card',
    idList: '60ec7973f09348111d97605c'
  };

  it('CRUD operations with Trello Card', function () {
    trelloHttp
      .post(`/1/cards?name=${card.name}&idList=${card.idList}`)
      .then((postResponse) => {
        expect(Object.keys(postResponse.data).length).to.be.equal(34);
        expect(postResponse.data.name).to.include('my new card');
        expect(postResponse.status).to.be.equal(200);
        return trelloHttp.get(`/1/cards/${postResponse.data.id}`);
      })
      .then((getResponse) => {
        expect(Object.keys(getResponse.data).length).to.be.equal(31);
        expect(getResponse.data.name).to.include('my new card');
        expect(getResponse.status).to.be.equal(200);
        return trelloHttp.put(`/1/cards/${getResponse.data.id}?name=updated name`);
      })
      .then((updateResponse) => {
        expect(Object.keys(updateResponse.data).length).to.be.equal(31);
        expect(updateResponse.data.name).to.include('updated name');
        expect(updateResponse.status).to.be.equal(200);
        return trelloHttp.delete(`/1/cards/${updateResponse.data.id}`);
      })
      .then((deleteResponse) => {
        expect(Object.keys(deleteResponse.data).length).to.be.equal(1);
        expect(deleteResponse.status).to.be.equal(200);
      });
  });
});
