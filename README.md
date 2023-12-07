# nested-keys-union

`nested-keys-union` is a TypeScript utility type that generates a union type representing all possible nested keys within a given nested object structure.
It supports arrays, objects, and primitive types, allowing you to easily navigate and work with deeply nested structures.

## Installation

```bash
npm install nested-keys-union
```

## Usage

```typescript
import { NestedKeys } from 'nested-keys-union';

// Example object with nested structure
const exampleObject = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'Example City',
    postalCode: '12345',
    contacts: [
      { type: 'email', value: 'john@example.com' },
      { type: 'phone', value: '555-1234' },
    ],
  };
};

// Get the union type of all nested keys
type AllNestedKeys = NestedKeys<typeof exampleObject>;

// Usage example
const nestedKey: AllNestedKeys = 'address.contacts.0.value';
```

In this example, `NestedKeys` is used to obtain a union type `AllNestedKeys` representing all possible keys within the `exampleObject` structure.
The resulting type `AllNestedKeys` can be used to ensure type safety when working with nested keys.

## Type Details

- `Primitive`: Represents the union type of string or number.
- `PremitiveWithBoolean`: Represents the union type of Primitive or boolean.
- `PrefixHelper`: Utility type for prefixing keys.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the functionality or documentation.

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
