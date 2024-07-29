// import { VariantProps, cva } from "class-variance-authority";
// import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";


// // Customized button variations
// const buttonVariants = cva(
//     "rounded-[30px] bg-mainRed border-gray border-2 sm:px-8  px-12 py-2 text-gray text-lg sm:text-2xl font-medium shadow-md hover:scale-95 transition-all duration-500",
//     {
//         variants: {
//             variant: {
//               default: "rounded-[30px] border-gray border-2 sm:px-8  px-12 py-2 text-white text-lg sm:text-2xl font-medium shadow-md hover:scale-95 transition-all duration-500",
//               outline:"rounded-[30px] border-gray border-2 sm:px-8  px-12 py-2 text-gray text-lg sm:text-2xl font-medium shadow-md hover:scale-95 transition-all duration-500",
            
//             },
//             size : {
//               deafult: '70px'
//             }
//           },
//           defaultVariants : {
//             variant:'default',
//             size:'deafult',
//           },
        
//     }
// );

// // It is our ButtonProps interafce it extends ButtonHTMLAttributes of HTMLButtonElement interface
// // Also extends from class-variance-authority lastly we passed our forwarded Reference type
// export interface ButtonProps
//     extends ButtonHTMLAttributes<HTMLButtonElement>,
//         VariantProps<typeof buttonVariants> {
//     ref?: React.Ref<HTMLButtonElement>;
// }

// const Button: FC<ButtonProps> = forwardRef(
//     ({ size, variant, className, children, ...props }, ref) => {
//         return (
//             <button>
//               {...props}
            
//             </button>
//         );
//     }
// );

// export default Button;

import React from 'react'

function Button() {
  return (
    <button>
      Click me
      
    </button>
  )
}

export default Button

