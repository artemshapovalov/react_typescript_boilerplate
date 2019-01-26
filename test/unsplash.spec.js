import unsplash from "../src/services/unsplash";

// jest knows to look in the __mocks__ folder
jest.mock("../src/services/unsplash");

it("fetches images from unsplash and renders them on mount", async done => {
  const images = await unsplash('Mountain');
  expect(images.length).toEqual(1);

  done();
});
