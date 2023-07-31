describe("Home Page", () => {
  it("renders the welcome message", () => {
    cy.visit("/");
    cy.contains("Welcome to the Kestis Shipyard").should("be.visible");
  });
});
describe("Home Page", () => {
  it("displays the image slider with three slides", () => {
    cy.visit("/");
    cy.get(".hero-image img").should("have.length", 3);
  });
});
describe("Home Page", () => {
  it("navigates to the products page when 'Shop Now' button is clicked", () => {
    cy.visit("/");
    cy.contains("Shop Now").click();
    cy.url().should("include", "/products");
  });
});
describe("Home Page", () => {
  it("displays the banner title", () => {
    cy.visit("/");
    cy.contains("Starship Collection").should("be.visible");
  });
});
