import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"

    let buttonClass = "btn"

    // Variantes
    if (variant === "default") buttonClass += " btn-primary"
    if (variant === "outline") buttonClass += " btn-outline"
    if (variant === "ghost") buttonClass += " btn-ghost"
    if (variant === "link") buttonClass += " btn-link"

    // Tamaños
    if (size === "sm") buttonClass += " btn-sm"
    if (size === "lg") buttonClass += " btn-lg"

    // Clase personalizada
    if (className) buttonClass += " " + className

    return (
      <Comp className={buttonClass} ref={ref} {...props}>
        {children}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button }
