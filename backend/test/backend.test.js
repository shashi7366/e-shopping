const chai=require('chai');
const chaiHttp=require('chai-http');
const should=chai.should();
const app=require('../app');

chai.use(chaiHttp);
let id;
let orderId;
let agent=chai.request.agent(app)

describe("testing product routes",()=>{
    it("getting all products",(done)=>{
        chai.request(app)
        .get('/api/products')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.have.property('message');
            done();
        })
    });

    it("should add a new record",(done)=>{
        chai.request(app)
        .post(`/api/products/new`)
        .send({
            name:"test Product",description:"its just a test product" ,price:123,category:"test"
        })
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.have.property('message');
            res.body.message.should.be.eql('success');
            id=res.body.data._id
            done();
        })
    });

    it("should search a product having name test Product",(done)=>{
        chai.request(app)
        .get('/api/products/searchProduct?keyword='+'test')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.have.property('message');
            res.body.message.should.be.eql('success');
            done();
        })
    });


    it("should update product",(done)=>{
        chai.request(app)
        .put('/api/products/test/'+id)
        .send({
            name:"test Product name changed",description:"its just a test product" ,price:123,category:"test"
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    });


    it("should get product details",(done)=>{
        chai.request(app)
        .get('/api/products/test/'+id)
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    });



    it("should delete product",(done)=>{
        chai.request(app)
        .delete('/api/products/test/'+id)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.have.property('message');
            res.body.message.should.be.eql('success');
            done();
        })
    });

});


//Testing user routes

describe("Testing user routes",()=>{
    it("login user route",(done)=>{
        agent
        .post('/api/users/login')
        .send({email:"testUser1@gmail.com",password:"123456789"})
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    });

    // it("logout user route",(done)=>{
    //     agent
    //     .get('/api/users/logout')
    //     .end((err,res)=>{
    //         res.should.have.status(200);
    //         done();
    //     })
    // });
});

//Testing order routes

describe("Testing order routes",()=>{
    
    it("add new Order",(done)=>{
        agent
        .post('/api/orders/new')
        .send({
            shippingInfo:{
                address:"japla",
                city:"hussainabad",
                state:"jharkhand",
                country:"india",
                pinCode:822116,
                phoneNo:7217637408
            },
                orderItems:[
                    {
                        name:"test Product",
                        price:123,
                        quantity:5,
                        image:"sampleImg",
                        product:"62f49110e50c5db270523dc7"
                    }],
                    paymentInfo:{
                       id:"available",
                       status:"paid"
                    },
                    itemsPrice:500,
                    taxPrice:1000,
                    shippingPrice:200,
                    totalPrice:1700
            })
            .end((err,res)=>{
                res.should.have.status(201);
                orderId=res.body.order._id;
                done();
            })
    });


    it("getting order details",(done)=>{
        
        agent
        .get('/api/orders/order/'+orderId)
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    });

    it("getting my orders",(done)=>{
        
        agent
        .get('/api/orders/me')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.have.property('orders');
            res.body.orders.should.be.a('array');
            done();
        })
    });

    it("deleting an order",(done)=>{
        
        agent
        .delete('/api/orders/test/admin/order/'+orderId)
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    });

})






