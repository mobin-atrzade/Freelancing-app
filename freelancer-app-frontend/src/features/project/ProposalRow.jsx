import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";

function ProposalRow({ proposal, index }) {
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>
                <p>{truncateText(proposal.description, 50)}</p>
            </td>
            <td>{proposal.duration} روز</td>
            <td>{proposal.price}</td>
            <td>{proposal.status}</td>
            <td>++</td>
        </Table.Row>
    )
}

export default ProposalRow;