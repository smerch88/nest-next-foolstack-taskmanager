## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.tsx`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API. Another components follows
similar logics.

- ### Title

| Prop        | Default     | Description                                            |
| ----------- | ----------- | ------------------------------------------------------ |
| `tag`       | `h2`        | choose the tag of title you'd need: `h1`, `h2` or `h3` |
| `variant`   | `dark`      | choose the color you'd need: `dark` or `light`         |
| `className` | `undefined` | add custom or additional css class you'd need          |

- ### Paragraph

| Prop        | Type        | Default value | Description                                                                              |
| ----------- | ----------- | ------------- | ---------------------------------------------------------------------------------------- |
| `variant`   | `string`    | 'primary'     | Determines the color scheme of the paragraph. Values can be `'primary'` or `'outlined'`. |
| `children`  | `ReactNode` | `undefined`   | The content to be rendered within the paragraph.                                         |
| `className` | `string`    | `undefined`   | Additional CSS classes to be added to the paragraph.                                     |

- ### CardWrapper

| Prop        | Type        | Default value | Description                                                                                                  |
| ----------- | ----------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| `tag`       | `string`    | `li`          | The HTML tag to be used for the CardWrapper. If not specified, the component defaults to using the `li` tag. |
| `children`  | `ReactNode` | `undefined`   | The content to be rendered within the CardWrapper.                                                           |
| `className` | `string`    | `undefined`   | Additional CSS classes to be added to the CardWrapper.                                                       |

- ### Section

| Prop        | Type        | Default     | Description                                              |
| ----------- | ----------- | ----------- | -------------------------------------------------------- |
| `children`  | `ReactNode` | `undefined` | undefined The content to be rendered within the section. |
| `className` | `string`    | `undefined` | An optional CSS class to be applied to the section       |

- ### Button

| Prop        | Default     | Description                                                  |
| ----------- | ----------- | ------------------------------------------------------------ |
| `variant`   | `primary`   | choose the appearance you'd need: 'heart' or 'delete'        |
| `like`      | `false`     | choose state                                                 |
| `header`    | `false`     | add fixed width you'd need it: 'true' or 'false' or 'simple' |
| `className` | `undefined` | add custom or additional css class you'd need                |
