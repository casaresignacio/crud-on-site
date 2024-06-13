import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { useUserAction } from "../hooks/useUsersActions";

export default function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const { removeUser } = useUserAction();

	return (
		<Card>
			<Title>
				Asistentes
				<Badge style={{ marginLeft: "8px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre y Apellido</TableHeaderCell>
						<TableHeaderCell>Estacionamiento</TableHeaderCell>
						<TableHeaderCell>Fecha</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell>
								{item.name}, {item.lastName}
							</TableCell>
							<TableCell>{item.carToPark ? "Si" : "No"}</TableCell>
							<TableCell>
								{item.dateToAssist
									? new Date(item.dateToAssist).toLocaleDateString("es-AR", {
											year: "numeric",
											month: "2-digit",
											day: "2-digit",
										})
									: "Fecha no disponible"}
							</TableCell>
							<TableCell>
								<button type="button">{/* SVG icon for action 1 */}</button>
								<button onClick={() => removeUser(item.id)} type="button">
									{/* SVG icon for action 2 */}
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
