import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
    { label: "رد شده", className: "badge--danger" },
    { label: "در انتظار تایید", className: "badge--secondary" },
    { label: "تایید شده", className: "badge--success" },
]

function ProposalRow({ proposal, index }) {
    const [open, setOpen] = useState(false);

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>
                <p>{truncateText(proposal.description, 50)}</p>
            </td>
            <td>{proposal.duration} روز</td>
            <td>{proposal.price}</td>
            <td>
                <span className={`badge ${statusStyle[proposal.status].className}`}>
                    {statusStyle[proposal.status].label}
                </span>
            </td>
            <td>
                <Modal
                    title="تغییر وضعیت درخواست"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ChangeProposalStatus
                        proposalId={proposal._id}
                        onClose={() => setOpen(false)}
                    />
                </Modal>
                <button onClick={() => setOpen(true)}>
                    تغییر وضعیت
                </button>
            </td>
        </Table.Row>
    )
}

export default ProposalRow;