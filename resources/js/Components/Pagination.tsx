import { Link } from "@inertiajs/react";

interface PaginationProps {
    links: {
        url: string | null; // `null` when the link is disabled
        label: string; // HTML string representing the label
        active: boolean; // Indicates if this is the current page
    }[];
}

export default function Pagination({ links }: PaginationProps) {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <Link
                    preserveScroll
                    key={link.label}
                    href={link.url || ""}
                    className={
                        `inline-block px-3 py-2 rounded-lg text-gray-200 text-xs ${
                        link.active
                            ? "bg-gray-950"
                            : !link.url
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-500 hover:text-blue-400"
                    }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
}
