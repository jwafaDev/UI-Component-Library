#  UI Component Library

A beautiful, lightweight, and easy-to-use React UI component library built with modern best practices.

[![React](https://img.shields.io/badge/React-18+-blue)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://www.javascript.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/jwafaDev/UI-Component-Library?style=social)](https://github.com/jwafaDev/UI-Component-Library)

##  Features

-  **Easy to Use** - Simple API and great documentation
-  **Fully Customizable** - Style components to match your design
-  **Lightweight** - Minimal dependencies, optimal performance
-  **Accessible** - Built with accessibility in mind
-  **Responsive** - Works perfectly on all devices
-  **Beautiful** - Modern design out of the box

##  Installation

```bash
npm install @jwafadev/ui-components
# or
yarn add @jwafadev/ui-components
```

##  Quick Start

```jsx
import React from 'react';
import { Button, Card, Badge } from '@jwafadev/ui-components';

function App() {
  return (
    <div>
      <Card>
        <Card.Header>Welcome to UI Components</Card.Header>
        <Card.Body>
          <Badge variant="success">New</Badge>
          <p>Start building beautiful UIs!</p>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={() => alert('Hello!')}>Click Me</Button>
    </div>
  );
}

export default App;
```

## 📚 Components

### 1. Button

Customizable button with multiple variants and sizes.

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button size="lg">Large Button</Button>
<Button disabled>Disabled</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean
- `onClick`: function

### 2. Card

Container component for grouping content.

```jsx
<Card>
  <Card.Header>Card Title</Card.Header>
  <Card.Body>
    <p>This is the main content of the card</p>
  </Card.Body>
  <Card.Footer>Card Footer</Card.Footer>
</Card>
```

**Props:**
- `children`: React elements
- `className`: string (optional)

### 3. Badge

Small label component for status indicators.

```jsx
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="primary">Primary</Badge>
```

**Props:**
- `variant`: 'primary' | 'success' | 'warning' | 'error' | 'secondary' (default: 'primary')
- `children`: string or React element

### 4. Input

Text input with validation support.

```jsx
<Input placeholder="Enter your name" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input error disabled />
<Input size="lg" />
```

**Props:**
- `type`: string (default: 'text')
- `placeholder`: string
- `error`: boolean
- `disabled`: boolean
- `size`: 'sm' | 'md' | 'lg' (default: 'md')

### 5. Modal

Dialog component for user interactions.

```jsx
const [isOpen, setIsOpen] = useState(false);

return (
  <>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Modal Title"
      size="md"
    >
      <p>Modal content goes here</p>
    </Modal>
  </>
);
```

**Props:**
- `isOpen`: boolean
- `onClose`: function
- `title`: string
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `children`: React elements

### 6. Dropdown

Select menu component.

```jsx
const [value, setValue] = useState('');

return (
  <Dropdown
    value={value}
    onChange={setValue}
    placeholder="Select an option"
    options={[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ]}
  />
);
```

**Props:**
- `value`: string
- `onChange`: function
- `options`: Array<{label: string, value: string}>
- `placeholder`: string
- `disabled`: boolean

## 🔧 Development

### Setup

```bash
git clone https://github.com/jwafaDev/UI-Component-Library.git
cd UI-Component-Library
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your components.

### Build for Production

```bash
npm run build
```

## 📝 Examples

See the `examples/` directory for more complete examples.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙋 Support

If you have any questions or issues, please [open an issue](https://github.com/jwafaDev/UI-Component-Library/issues) on GitHub.

---

**Made with ❤️ by jwafaDev**

If you find this library helpful, please give it a star!
