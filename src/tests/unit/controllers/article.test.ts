import sinon, { SinonStub } from 'sinon'
import { Request, Response } from 'express';
import chai from 'chai';
import chaiHttp = require('chai-http');
import ArticleController from '../../../api/controllers/Article';
import ArticleService from '../../../api/services/Article';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests Article Controller', () => {

  let articleController: ArticleController;
  let stubService: ArticleService;

  const mockReq = {} as Request;
  const mockRes = {} as Response;
  
  mockReq.body = {
    "id": 21,
    "featured": false,
    "title": "China launches pair of commercial remote sensing satellites, sea launch scrubbed",
    "url": "https://spacenews.com/china-launches-pair-of-commercial-remote-sensing-satellites-sea-launch-scrubbed/",
    "imageUrl": "https://spacenews.com/wp-content/uploads/2022/04/siwei0102-supverviewNeo1-01-02-CZ2C-JSLC-29april2022-OS-CNSA.jpg",
    "newsSite": "SpaceNews",
    "summary": "1",
    "publishedAt": "2022-04-29T09:50:08.000Z",
    "launches": [],
    "events": []
  },

  mockReq.query = {
    page: '1'
  }

  mockReq.params = {
    id: "6266df9db351800b50e4561d"
  }

  before(() => {
    stubService = new ArticleService();
    sinon.stub(stubService, 'create').resolves(mockReq.body);
    sinon.stub(stubService, 'read').resolves([mockReq.body]);
    sinon.stub(stubService, 'readOne').resolves(mockReq.body);
    sinon.stub(stubService, 'update').resolves(mockReq.body);
    sinon.stub(stubService, 'delete').resolves(mockReq.body);
    articleController = new ArticleController(stubService);
  });

  beforeEach(() => {
    mockRes.status = sinon.stub().returns(mockRes);
    mockRes.json = sinon.stub().returns(undefined);
  })

  it('should call service and return res status 201 on create', async () => {
    await articleController.create(mockReq, mockRes);
    expect((stubService.create as SinonStub).calledWith(mockReq.body)).to.be.true;
    expect((mockRes.status as SinonStub).calledWith(201)).to.be.true;
  });

  it('should call service and return res status 200 on read', async () => {
    await articleController.read(mockReq, mockRes);
    expect((stubService.read as SinonStub).calledWith(1)).to.be.true;
    expect((mockRes.status as SinonStub).calledWith(200)).to.be.true;
  });

  it('should call service and return res status 200 on readOne', async () => {
    await articleController.readOne(mockReq, mockRes);
    expect((stubService.readOne as SinonStub).calledWith(mockReq.params.id)).to.be.true;
    expect((mockRes.status as SinonStub).calledWith(200)).to.be.true;
  });

  it('should call service and return res status 201 on update', async () => {
    await articleController.update(mockReq, mockRes);
    expect((stubService.update as SinonStub).calledWith(mockReq.params.id, mockReq.body)).to.be.true;
    expect((mockRes.status as SinonStub).calledWith(200)).to.be.true;
  });

  it('should call service and return res status 204 on delete', async () => {
    await articleController.delete(mockReq, mockRes);
    expect((stubService.delete as SinonStub).calledWith(mockReq.params.id)).to.be.true;
    expect((mockRes.status as SinonStub).calledWith(204)).to.be.true;
  });

});
