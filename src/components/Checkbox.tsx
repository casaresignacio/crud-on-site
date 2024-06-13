import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import React from "react";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>
>(({ className, checked, ...props }, forwardedRef) => {
	return (
		<div className="flex items-center">
			<CheckboxPrimitives.Root
				ref={forwardedRef}
				{...props}
				checked={checked}
				className={`relative inline-flex h-4 w-4 shrink-0 appearance-none items-center justify-center rounded border shadow-sm outline-none transition duration-100 enabled:cursor-pointer
          text-white dark:text-gray-50
          bg-white dark:bg-gray-950
          border-gray-300 dark:border-gray-800
          data-[disabled]:border-gray-300 data-[disabled]:bg-gray-100 data-[disabled]:text-gray-400
          data-[disabled]:dark:border-gray-700 data-[disabled]:dark:bg-gray-800 data-[disabled]:dark:text-gray-500
          enabled:data-[state=checked]:border-0 enabled:data-[state=checked]:border-transparent enabled:data-[state=checked]:bg-blue-500
          enabled:data-[state=indeterminate]:border-0 enabled:data-[state=indeterminate]:border-transparent enabled:data-[state=indeterminate]:bg-blue-500
          focus:ring focus:ring-offset-2 focus:ring-blue-500 ${className}`}
			>
				<CheckboxPrimitives.Indicator className="flex h-full w-full items-center justify-center">
					{checked === "indeterminate" ? (
						<svg
							aria-hidden="true"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
							<line
								stroke="currentColor"
								strokeLinecap="round"
								strokeWidth="2"
								x1="4"
								x2="12"
								y1="8"
								y2="8"
							></line>
						</svg>
					) : (
						// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
							<path
								d="M11.2 5.59998L6.79999 9.99998L4.79999 7.99998"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							></path>
						</svg>
					)}
				</CheckboxPrimitives.Indicator>
			</CheckboxPrimitives.Root>
			<label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
				Cochera
			</label>
		</div>
	);
});
Checkbox.displayName = "ParkingCheckbox";

export { Checkbox };
