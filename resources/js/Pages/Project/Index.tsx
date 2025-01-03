import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_TEXT_MAP, PROJECT_STATUS_CLASS_MAP } from "@/constants";
import { Head, Link, router} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import TableHeading from "@/Components/TableHeading";


interface Project {
    id: number;
    name: string;
    image_path?: string; // Assuming optional image path
    status?: keyof typeof PROJECT_STATUS_TEXT_MAP;
    created_at?: string;
    due_date?: string;
    createdBy: {
        name: string;
    };
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedProjects {
    data: Project[];
    links?: {
        next?: string;
        prev?: string;
    };
    meta?: {
        current_page: number;
        last_page: number;
        total: number;
        links?: PaginationLink[];
    };
}

interface IndexProps {
    auth?: { user: { id: number; name: string; email: string } };
    projects: PaginatedProjects;
    queryParams?: Record<string, string | undefined>;
}

const Index: React.FC<IndexProps> = ({ auth, projects, queryParams = {} }) => {
    queryParams = queryParams || {}
    const searchFieldChanged = (name: string, value: string) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route('project.index'), queryParams);
    };
    const onKeyDown = (name: string, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') { // Example: Handle only the "Enter" key
            const inputValue = e.currentTarget.value; // Use currentTarget to access the input value
            searchFieldChanged(name, inputValue);
        }
    };

    const sortChanged = (name: string) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("project.index"), queryParams);
    }

    return (
        <AuthenticatedLayout
            user={auth!.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Project
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <TableHeading
                                                name="id"
                                                sort_field={queryParams.sort_field}
                                                sort_direction={queryParams.sort_direction}
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>
                                            <th className="px-3 py-3">Image</th>
                                            <th onClick={(e) => sortChanged('name')}>
                                                <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                                    Name
                                                    <div>
                                                        <ChevronUpIcon className="w-4"/>
                                                        <ChevronDownIcon className="w-4 -mt-2"/>
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={(e) => sortChanged('status')}>
                                                <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                                    Status
                                                    <div>
                                                        <ChevronUpIcon className="w-4"/>
                                                        <ChevronDownIcon className="w-4 -mt-2"/>
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={(e) => sortChanged('created_at')}>
                                                <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                                    Create Date
                                                    <div>
                                                        <ChevronUpIcon className="w-4"/>
                                                        <ChevronDownIcon className="w-4 -mt-2"/>
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={(e) => sortChanged('due_date')}>
                                            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                                                    Due Date
                                                    <div>
                                                        <ChevronUpIcon className="w-4"/>
                                                        <ChevronDownIcon className="w-4 -mt-2"/>
                                                    </div>
                                                </div>
                                            </th>
                                            <th className="px-3 py-3">Created By</th>
                                            <th className="px-3 py-3 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                defaultValue={queryParams.name}
                                                placeholder="Project Name"
                                                onBlur={(e) => searchFieldChanged('name', e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        onKeyDown('name', e);
                                                    }
                                                }}
                                            />
                                            </th>
                                            <th className="px-3 py-3">
                                                <SelectInput 
                                                    className="w-full" 
                                                    defaultValue={queryParams.status}
                                                    onChange={e => searchFieldChanged('status', e.target.value)

                                                    }
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="in_progress">In Progress</option>
                                                    <option value="completed">Completed</option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project) => (
                                            <tr
                                                key={project.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-3 py-2">{project.id}</td>
                                                <td className="px-3 py-2">
                                                    <img src={project.image_path} style={{width:60}} />
                                                </td>
                                                <td className="px-3 py-2">{project.name}</td>
                                                <td className="px-3 py-2">
                                                    <span
                                                        className={`px-2 py-1 rounded text-white ${
                                                            project.status ? PROJECT_STATUS_CLASS_MAP[project.status] : "bg-gray-500"
                                                        }`}
                                                    >
                                                        {project.status ? PROJECT_STATUS_TEXT_MAP[project.status] : "N/A"}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">{project.created_at ?? "N/A"}</td>
                                                <td className="px-3 py-2 text-nowrap">{project.due_date ?? "N/A"}</td>
                                                <td className="px-3 py-2">{project.createdBy.name}</td>
                                                <td className="px-3 py-2">
                                                    <Link 
                                                        href={route("project.edit", project.id)}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link 
                                                        href={route("project.destroy", project.id)}
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {projects.meta?.links && <Pagination links={projects.meta.links} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
