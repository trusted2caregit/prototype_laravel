import {
    forwardRef,
    SelectHTMLAttributes,
    useImperativeHandle,
    useRef,
} from 'react';

// Define the ref interface
interface SelectInputRef {
    focus: () => void;
}

export default forwardRef<SelectInputRef, SelectHTMLAttributes<HTMLSelectElement> & { isFocused?: boolean }>(
    function SelectInput({ className = '', children, ...props }, ref) {
        const localRef = useRef<HTMLSelectElement>(null);

        // Expose the imperative focus method
        useImperativeHandle(ref, () => ({
            focus: () => localRef.current?.focus(),
        }));

        return (
            <select
                {...props}
                className={
                    'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 ' +
                    className
                }
                ref={localRef}
            >
                {children}
            </select>
        );
    }
);
