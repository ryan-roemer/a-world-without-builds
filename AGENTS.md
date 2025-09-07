# Cursor Rules for A World Without Builds Project

## Spectacle Presentation Rules

When working with Spectacle presentations:

1. **NO EXTRA STYLING**: Never add `style` attributes or unnecessary styling unless specifically required for unique slide behavior that cannot be achieved with Spectacle's built-in props and theming.

2. **Theme-First Approach**: Use Spectacle's theme system and component props instead of custom styles:
   - Use `color="primary"` instead of `style={{ color: theme.colors.primary }}`
   - Use `fontSize="h1"` instead of `style={{ fontSize: "150px" }}`
   - Use `textAlign="center"` prop instead of `style={{ textAlign: "center" }}`

3. **Minimal Layout Props**: When using FlexBox, Box, or Grid components, only specify necessary layout properties. Avoid redundant styling.

4. **Component-First**: Use semantic Spectacle components (Heading, Text, Link) instead of HTML elements with inline styles.

5. **HTM Template Literals**: Always use `htm` with template literals, never JSX syntax.

## Code Generation Guidelines

- Default to using built-in component capabilities
- Only add custom styling when explicitly requested for functionality that cannot be achieved through standard props
- Prefer theme-defined values over hardcoded styles
- Keep presentations clean and maintainable by avoiding unnecessary complexity

Refer to `.cursor/rules/spectacle.md` for detailed Spectacle component usage guidelines.
