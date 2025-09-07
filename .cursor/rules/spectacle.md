# Spectacle Component Rules

## General Guidelines

### Use htm, not JSX

- Always use `htm` template literals instead of JSX syntax
- Import and bind htm: `import htm from "htm"; const html = htm.bind(createElement);`
- Use template literal syntax: `html\`<ComponentName prop=${value} />\``
- For components with children: `html\`<ComponentName>${children}</ComponentName>\``

### Component Import Pattern

Here is a list of many components and import style:

```javascript
import {
  Deck,
  Slide,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  FlexBox,
  Box,
  Grid,
  Image,
  CodePane,
  Appear,
  Stepper,
  Link,
  Quote,
  OrderedList,
  CodeSpan,
  DefaultTemplate,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  Progress,
  AnimatedProgress,
  FullScreen,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "spectacle";
```

Note -- only import variables we actually use.

## Main Components

### Deck Component

- Wraps the entire presentation
- Key props: `theme`, `template`, `transition`, `backgroundImage`
- Example:

```javascript
html\`<${Deck} theme=${theme} template=${html\`<${DefaultTemplate} />\`}>
  ${slides}
</${Deck}>\`
```

### Slide Component

- Wraps individual slides
- Key props: `backgroundColor`, `backgroundImage`, `textColor`, `transition`, `template`
- Example:

```javascript
html\`<${Slide} backgroundColor="primary" textColor="secondary">
  <${Heading}>Title</${Heading}>
  <${Text}>Content</${Text}>
</${Slide}>\`
```

## Typography Components

### Heading

- For slide titles and section headers
- Props: `color`, `fontSize`, `fontWeight`, `textAlign`, `margin`
- Example: `html\`<${Heading} color="secondary">Slide Title</${Heading}>\``

### Text

- For body text content
- Props: `color`, `fontSize`, `textAlign`, `margin`
- Example: `html\`<${Text} fontSize="24px">Body content</${Text}>\``

### FitText

- Auto-sizes text to fit container
- Example: `html\`<${FitText}>Large fitting text</${FitText}>\``

### Lists

- `UnorderedList` and `OrderedList` for bullet/numbered lists
- `ListItem` for individual list items
- Example:

```javascript
html\`<${UnorderedList}>
  <${ListItem}>First item</${ListItem}>
  <${ListItem}>Second item</${ListItem}>
</${UnorderedList}>\`
```

### Link

- For clickable links
- Props: `href`, `color`, `textDecoration`
- Example: `html\`<${Link} href="https://example.com">Click here</${Link}>\``

### Quote

- For quotations with left border styling
- Example: `html\`<${Quote}>This is a quote</${Quote}>\``

### CodeSpan

- For inline code snippets
- Example: `html\`<${CodeSpan}>const x = 42</${CodeSpan}>\``

## Layout Components

### FlexBox

- Flexbox container with Spectacle styling
- Props: All flexbox properties plus `Space`, `Color`, `Layout`, `Position`, `Border`
- Example: `html\`<${FlexBox} justifyContent="center" alignItems="center">${content}</${FlexBox}>\``

### Box

- General container component
- Props: `Space`, `Color`, `Layout`, `Position`, `Border`
- Example: `html\`<${Box} padding="20px" backgroundColor="tertiary">${content}</${Box}>\``

### Grid

- CSS Grid container
- Props: Grid properties plus layout props
- Example: `html\`<${Grid} gridTemplateColumns="1fr 1fr">${items}</${Grid}>\``

## Advanced Components

### CodePane

- Syntax-highlighted code blocks
- Props: `language`, `theme`, `highlightRanges`, `showLineNumbers`
- Import themes: `import { codePaneThemes } from "spectacle"`
- Example:

```javascript
html\`<${CodePane}
  language="javascript"
  theme=${codePaneThemes.vsDark}
  highlightRanges=${[[1, 3], [6, 8]]}
>{\`const example = "code";\`}</${CodePane}>\`
```

### Image

- Display images in slides
- Props: `src`, plus layout and position props
- Example: `html\`<${Image} src=${imageUrl} width="400px" />\``

### Appear

- Animate content appearance on slide steps
- Props: `activeStyle`, `inactiveStyle`, `tagName`, `priority`
- Example: `html\`<${Appear}><${Text}>This appears on step</${Text}></${Appear}>\``

### Stepper

- Multi-step animations with values
- Props: `values`, `render`, `activeStyle`, `inactiveStyle`, `alwaysVisible`
- Example:

```javascript
html\`<${Stepper} values=${['first', 'second', 'third']}>
  \${(value, step, isActive) => html\`<${Text}>\${value}</${Text}>\`}
</${Stepper}>\`
```

## Table Components

- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell`
- Example:

```javascript
html\`<${Table}>
  <${TableHeader}>
    <${TableRow}>
      <${TableCell}>Header 1</${TableCell}>
      <${TableCell}>Header 2</${TableCell}>
    </${TableRow}>
  </${TableHeader}>
  <${TableBody}>
    <${TableRow}>
      <${TableCell}>Data 1</${TableCell}>
      <${TableCell}>Data 2</${TableCell}>
    </${TableRow}>
  </${TableBody}>
</${Table}>\`
```

## Markdown Components

### MarkdownSlide

- Single slide authored in Markdown
- Props: `componentProps`, `animateListItems`
- Example:

```javascript
html\`<${MarkdownSlide} animateListItems>\${markdownContent}</${MarkdownSlide}>\`
```

### MarkdownSlideSet

- Multiple slides from Markdown (use `---` to separate)
- Example:

```javascript
html\`<${MarkdownSlideSet}>\${multiSlideMarkdown}</${MarkdownSlideSet}>\`
```

## Utility Components

### Notes

- Presenter notes (only visible in presenter mode)
- Example: `html\`<${Notes}>These are presenter notes</${Notes}>\``

### Progress

- Slide progress indicators
- Props: `size`, `color`
- Example: `html\`<${Progress} size={30} color="primary" />\``

### AnimatedProgress

- Progress with Pacman animation
- Props: `size`, `color`, `pacmanColor`
- Example: `html\`<${AnimatedProgress} pacmanColor="yellow" />\``

### FullScreen

- Fullscreen toggle button
- Props: `size`, `color`
- Example: `html\`<${FullScreen} size={25} color="white" />\``

## Templates

### DefaultTemplate

- Built-in template with progress and fullscreen controls
- Props: `color`
- Example: `html\`<${DefaultTemplate} color="purple" />\``

### Custom Templates

- Create custom templates with `slideNumber` and `numberOfSlides` props
- Example:

```javascript
const CustomTemplate = ({ slideNumber, numberOfSlides }) =>
  html\`<${Box} position="absolute" bottom="20px" right="20px">
    <${Text}>\${slideNumber + 1} / \${numberOfSlides}</${Text}>
  </${Box}>\`
```

## Common Patterns

### Slide with Appear Steps

```javascript
html\`<${Slide}>
  <${Heading}>Title</${Heading}>
  <${Appear}><${Text}>First point</${Text}></${Appear}>
  <${Appear}><${Text}>Second point</${Text}></${Appear}>
  <${Appear}><${Text}>Third point</${Text}></${Appear}>
</${Slide}>\`
```

### Code Demo Slide

```javascript
html\`<${Slide}>
  <${Heading}>Code Example</${Heading}>
  <${CodePane} language="javascript" theme=${codePaneThemes.vsDark}>
    {\`const demo = "Hello World";\`}
  </${CodePane}>
</${Slide}>\`
```

### Two-Column Layout

```javascript
html\`<${Slide}>
  <${FlexBox} width="100%" height="100%">
    <${Box} flex="1" padding="20px">
      <${Heading}>Left Column</${Heading}>
      <${Text}>Left content</${Text}>
    </${Box}>
    <${Box} flex="1" padding="20px">
      <${Heading}>Right Column</${Heading}>
      <${Text}>Right content</${Text}>
    </${Box}>
  </${FlexBox}>
</${Slide}>\`
```

## Background Images from Unsplash

### Searching for Slide Backgrounds

When selecting background images for slides from Unsplash (https://unsplash.com/), follow these guidelines:

#### Search Strategy

1. **Use specific, relevant keywords** related to your slide content
   - For tech presentations: "technology", "coding", "computer", "digital", "abstract"
   - For business slides: "business", "office", "meeting", "teamwork", "corporate"
   - For creative content: "creative", "design", "art", "inspiration"

2. **Consider presentation context**
   - Conference presentations: Professional, clean backgrounds
   - Internal meetings: More casual, branded imagery
   - Educational content: Clear, non-distracting patterns

3. **Filter for quality**
   - Use high-resolution images (1920x1080 minimum for presentations)
   - Look for images with good contrast for text overlay
   - Avoid overly busy or distracting compositions

#### Technical Requirements

1. **Image dimensions**: Prefer landscape orientation (16:9 ratio)
2. **File format**: JPG or PNG, under 2MB for performance
3. **Color considerations**:
   - Light backgrounds work well with dark text
   - Dark backgrounds need light text colors
   - Consider your theme's color palette

#### Implementation in Spectacle

```javascript
// Deck-level background (applies to all slides)
html`<${Deck}
  theme=${theme}
  backgroundImage="url('https://images.unsplash.com/photo-id')"
>
  ${slides}
</${Deck}>`;

// Individual slide background
html`<${Slide}
  backgroundImage="url('https://images.unsplash.com/photo-id')"
  backgroundSize="cover"
  backgroundPosition="center"
  backgroundOpacity=${0.9}
>
  <${Heading} color="white">Title with Background</${Heading}>
</${Slide}>`;
```

#### Attribution Best Practices

1. **Always credit photographers** when using Unsplash images
2. **Add attribution in presenter notes** or final slide
3. **Use format**: "Photo by [Photographer Name] on Unsplash"
4. **Include link**: Direct link to the specific photo on Unsplash

#### Recommended Search Terms by Topic

- **Technology**: "circuit board", "code screen", "data visualization", "network", "servers"
- **Business**: "handshake", "meeting room", "city skyline", "graphs", "teamwork"
- **Abstract**: "geometric patterns", "gradients", "minimal", "textures", "lines"
- **Nature/Metaphors**: "mountain peak", "ocean waves", "forest path", "sunrise"

#### Accessibility Considerations

1. **Ensure sufficient contrast** between background and text (WCAG AA: 4.5:1 ratio)
2. **Test readability** with your chosen text colors
3. **Avoid motion-inducing patterns** for users with vestibular disorders
4. **Provide alternative text descriptions** in presenter notes if images convey meaning

## Best Practices

1. **Always use htm template literals** - Never use JSX syntax
2. **Import components explicitly** - Don't use namespace imports
3. **Use semantic component names** - `Heading` for titles, `Text` for body content
4. **Leverage Appear/Stepper** - For progressive content revelation
5. **Use consistent theming** - Apply theme objects to Deck component
6. **Include presenter notes** - Use `Notes` component for additional context
7. **Test in presenter mode** - Verify notes and transitions work correctly
8. **Use templates** - Apply consistent layout with `DefaultTemplate` or custom templates
9. **Choose appropriate backgrounds** - Follow Unsplash guidelines for professional, accessible imagery

## Reference Links

- Official docs: https://nearform.com/open-source/spectacle/docs/
- API reference: https://nearform.com/open-source/spectacle/docs/api-reference
- GitHub: https://github.com/FormidableLabs/spectacle
