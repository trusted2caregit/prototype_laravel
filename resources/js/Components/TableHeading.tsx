import React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

interface TableHeadingProps {
    name: string;
    sortable?: boolean;
    sort_field?: string | null;
    sort_direction?: string | null;
    sortChanged?: (field: string) => void;
    children: React.ReactNode;
}

const TableHeading: React.FC<TableHeadingProps> = ({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
}) => {
    return (
        <th onClick={() => sortChanged(name)}>
            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 " +
                                (sort_field === name && sort_direction === "desc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
