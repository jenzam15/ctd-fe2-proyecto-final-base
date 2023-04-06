import { render, screen, waitFor } from "../../test-utils";
import userEvent from '@testing-library/user-event'
import Cita from "./Cita";


describe("Test componente Cita", () => {
    test("Mostrar una cita aleatoria", async () => {
        render(<Cita />);
        const button = screen.getByText("Obtener cita aleatoria");
        userEvent.click(button);
        await waitFor(() => expect(screen.queryByText("Lisa Simpson")));
      });

    test("Mostrar mensaje 'Por favor ingrese un nombre válido' al ingresar números", async () => {
        render(<Cita />);
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        await userEvent.type(input, '1234');
        const button = screen.getByText("Obtener Cita");
        await userEvent.click(button);
        expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument();
      });

    test("Cuando se presiona el boton borrar, se elimina el nombre del personaje del input", async () => {
        render(<Cita />)
        const inputField = screen.getByLabelText("Author Cita");
        userEvent.type(inputField, ("Marge Simpson"));
        await waitFor(() => expect(inputField).toHaveValue("Marge Simpson"));
        const button = screen.getByLabelText("Borrar");
        await userEvent.click(button);
        await waitFor(() => expect(inputField).toHaveValue(""))
      });

    test("Mostrar mensaje: CARGANDO...", async () => {
        render(<Cita />);
        const button = screen.getByText("Obtener cita aleatoria");
        userEvent.click(button);
        expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
      });

    test("Mostrar una cita de Marge Simpson", async () => {
        render(<Cita />);
        const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
        await userEvent.type(input, "Marge");
        const button = screen.getByText("Obtener Cita");
        await userEvent.click(button);
        await waitFor(() => expect(screen.queryByText("Marge Simpson")));
      });

});