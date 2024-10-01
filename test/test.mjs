import * as chaiModule from "chai";
import chaiHttp from "chai-http";
import app from "../server.mjs";

const chai = chaiModule.use(chaiHttp);
chai.should();

describe("API - Digital HIVE Server", ()=>{
    describe("GET Root", ()=>{
        it("Should get code retour 200", (done)=>{
            chai.request.execute(app)
            .get("/")
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            })
        });
    })
});
