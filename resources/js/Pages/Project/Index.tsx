import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";

interface Project {
    id: number;
    name: string;
    image_path?: string; // Assuming optional image path
    status?: string;
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
}

const Index: React.FC<IndexProps> = ({ auth, projects }) => {
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
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr>
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Image</th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Create Date</th>
                                        <th className="px-3 py-3">Due Date</th>
                                        <th className="px-3 py-3">Created By</th>
                                        <th className="px-3 py-3 text-right">Actions</th>
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
                                            <td className="px-3 py-2">{project.status ?? "N/A"}</td>
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
                            {projects.meta?.links && <Pagination links={projects.meta.links} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
