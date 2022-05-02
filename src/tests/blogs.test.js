let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');
let should = chai.should();


chai.use(chaiHttp)


describe('/GET blogs', () => {
    const blogs = [
        {
            id:"1",
            title:"first blog",
            content: "this is first content"
        },
        {
            id:"2",
            title:"second blog",
            content: "this is first content"
        },
        {
            id:"3",
            title:"third blog",
            content: "this is first content"
        },
    ]
    it('it should GET all the blogs', (done) => {
        chai.request(app)
        .get('/api/v1/blogs')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.blogs.should.be.a('array');
              done(err);
            });
        });
        it('it should not GET a single blog if does not exist', (done) => {
            chai.request(app)
                .get('/api/v1/blogs/19')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                  done(err);
                });
          });

          it('it should GET a single blog if does exist', (done) => {
            chai.request(app)
                .get('/api/v1/blogs/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                  done(err);
                });
          });

});