import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP } from "@/constants";
import { Head, Link, router} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import TableHeading from "@/Components/TableHeading";


interface Task {
    id: number;
    name: string;
    image_path?: string; // Assuming optional image path
    status?: keyof typeof TASK_STATUS_TEXT_MAP;
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

interface PaginatedTasks {
    data: Task[];
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
    tasks: PaginatedTasks;
    queryParams?: Record<string, string | undefined>;
}

const Index: React.FC<IndexProps> = ({ auth, tasks, queryParams = {} }) => {
    queryParams = queryParams || {}
    const searchFieldChanged = (name: string, value: string) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }
        router.get(route('task.index'), queryParams);
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
        router.get(route("task.index"), queryParams);
    }

    return (
        <AuthenticatedLayout
            user={auth!.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Task
                </h2>
            }
        >
            <Head title="Tasks" />

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
                                            <TableHeading
                                                name="name"
                                                sort_field={queryParams.sort_field}
                                                sort_direction={queryParams.sort_direction}
                                                sortChanged={sortChanged}
                                            >
                                                Name
                                            </TableHeading>
                                            <TableHeading
                                                name="status"
                                                sort_field={queryParams.sort_field}
                                                sort_direction={queryParams.sort_direction}
                                                sortChanged={sortChanged}
                                            >
                                                Status
                                            </TableHeading>
                                            <TableHeading
                                                name="created_at"
                                                sort_field={queryParams.sort_field}
                                                sort_direction={queryParams.sort_direction}
                                                sortChanged={sortChanged}
                                            >
                                                Create Date
                                            </TableHeading>
                                            <TableHeading
                                                name="due_date"
                                                sort_field={queryParams.sort_field}
                                                sort_direction={queryParams.sort_direction}
                                                sortChanged={sortChanged}
                                            >
                                                Due Date
                                            </TableHeading>
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
                                                placeholder="Task Name"
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
                                        {tasks.data.map((task) => (
                                            <tr
                                                key={task.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-3 py-2">{task.id}</td>
                                                <td className="px-3 py-2">
                                                    <img src={task.image_path} style={{width:60}} />
                                                </td>
                                                <td className="px-3 py-2">{task.name}</td>
                                                <td className="px-3 py-2">
                                                    <span
                                                        className={`px-2 py-1 rounded text-white ${
                                                            task.status ? TASK_STATUS_CLASS_MAP[task.status] : "bg-gray-500"
                                                        }`}
                                                    >
                                                        {task.status ? TASK_STATUS_TEXT_MAP[task.status] : "N/A"}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">{task.created_at ?? "N/A"}</td>
                                                <td className="px-3 py-2 text-nowrap">{task.due_date ?? "N/A"}</td>
                                                <td className="px-3 py-2">{task.createdBy.name}</td>
                                                <td className="px-3 py-2">
                                                    <Link 
                                                        href={route("task.edit", task.id)}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link 
                                                        href={route("task.destroy", task.id)}
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
                            {tasks.meta?.links && <Pagination links={tasks.meta.links} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
