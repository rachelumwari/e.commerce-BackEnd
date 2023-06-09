/* eslint-disable @typescript-eslint/no-explicit-any */
import supertest from "supertest";
import createServer from '../../utils/server'
const app = createServer();

describe("cart", () => {
  jest.setTimeout(120000);
  let token
  beforeAll(async () => {
    const res = await supertest(app)
      .post('/login')
      .send({
        email: 'bicis68140@loongwin.com',
        password: 'string',
      });
    token = res.body.token;
  });

  describe("add to cart", () => {
    test("in case  user loggedin", async () => {
      const response: any = await supertest(app).post("/cart/add/IJUv8Re52K5q").set('Authorization', `Bearer ${token}`)
      expect(response.status).toBe(200)
    })

    test("remove from cart", async () => {
      const response: any = await supertest(app).delete("/cart/remove/9").set('Authorization', `Bearer ${token}`)
      expect(response.status).toBe(200)
    }, 40000)
    test("update cart", async () => {
      const response: any = await supertest(app).patch("/cart/9").set('Authorization', `Bearer ${token}`).send({ "itemQuantity": 9 })
      expect(response.status).toBe(200)
    })
    test("update cart", async () => {
      const response: any = await supertest(app).patch("/cart/9").set('Authorization', `Bearer ${token}`).send({ "itemQuantity": 10 })
      expect(response.status).toBe(200)
    })

    test("view cart", async () => {
      const response: any = await supertest(app).get("/cart/view").set('Authorization', `Bearer ${token}`)
      expect(response.status).toBe(200)// test car review
    })



  })

})
