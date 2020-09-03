describe("Busqueda de viaje al espacio ingresando fechas, numero de adultos y niños para el planeta Madan", () => {
    context("Home Page", () => {
        it('Ingresar a pagina de test', function () {
            cy.visit("http://demo.testim.io/");
            cy.contains("Space & Beyond");
        }
        );
        it('Ingresar la fecha de inicio de viaje', function () {
            cy.get(":nth-child(1) > [data-react-toolbox=\"date-picker\"] > .theme__input___qUQeP > .theme__inputElement___27dyY").click();
            cy.get(":nth-child(8) > span").click();
            cy.get(".theme__navigation___3eiS- > :nth-child(2)").click();
            cy.wait(400);
        }
        );
        it('Ingresar la fecha de regreso de viaje', function () {
            cy.get(":nth-child(2) > [data-react-toolbox=\"date-picker\"] > .theme__input___qUQeP > .theme__inputElement___27dyY").click();
            cy.get(":nth-child(22) > span").click();
            cy.get(".theme__navigation___3eiS- > :nth-child(2)").click();
            cy.wait(400);
            }
        );
        it('Ingresar el numero de adultos y niños a viajar', function () {
            cy.get(".Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY").click();
            cy.get(".theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)").click();
            cy.get(":nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY").click();
            cy.get(".theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)").click();
            cy.wait(400);
            cy.get(".Hero__hero___1FDXn > :nth-child(4) > .theme__button___1iKuo").click();
            cy.wait(300);
            cy.url().should('include', '/destinations');
            }
        );
        it('Seleccionar un planeta para viajar', function () {
            cy.contains("Your next destination");
            cy.get(".Gallery__filters-box___1z3SX");
            cy.scrollTo(0, 500);
            cy.contains("Madan");
            cy.get(":nth-child(1) > .theme__cardActions___1aHjq > .theme__button___1iKuo").click();
            cy.wait(300);
            cy.url().should('include', '/checkout');
            }
        );
    });

    context("Checkout Page", () => {
        it('Diligenciar la reservación del viaje', function () {
            cy.get(".Checkout__headline-1___2KQaR")
            cy.contains("Checkout")
            cy.get("form > :nth-child(1) > .theme__inputElement___27dyY").type("Juan Pedro Prueba");
            cy.get("form > :nth-child(2) > .theme__inputElement___27dyY").type("juan@test.test");
            cy.get("form > :nth-child(3) > .theme__inputElement___27dyY").type("222-22-1243");
            cy.get("form > :nth-child(4) > .theme__inputElement___27dyY").type("(212) 324-4152");
            cy.contains("Order Summary");
            cy.get(".theme__check___2B20W").click();
            cy.get(".flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo").click();
            }
        );
    });

    context("API Test", () => {
        it('API Test', () => {
            cy.request('GET','https://api.thecatapi.com/v1/images/search')
                .then((response)=>{
                    expect(response.status).equal(200)
                    expect(response.body).to.not.be.null
                    cy.request('GET','https://api.thecatapi.com/v1/images/search')
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')


            })
        })
    });
});