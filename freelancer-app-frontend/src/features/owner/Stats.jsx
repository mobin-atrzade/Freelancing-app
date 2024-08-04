import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {

    const numofProjects = projects.length;
    const numOfAcceptedProjects = projects.map((pproject) => pproject.Status === 2).length;
    const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0);

    return (
        <div className="grid grid-cols-3 gap-x-8">
            <Stat
                color="primary"
                title="پروژه ها"
                value={numofProjects}
                icon={<HiOutlineViewGrid className="w-20 h-20" />}
            />
            <Stat
                color="green"
                title="پروژه های واگذاری شده"
                value={numOfAcceptedProjects}
                icon={<HiCurrencyDollar className="w-20 h-20" />}
            />
            <Stat
                color="blue"
                title="درخواست ها"
                value={numOfProposals}
                icon={<HiCollection className="w-20 h-20" />}
            />
        </div>
    )
}

export default Stats;