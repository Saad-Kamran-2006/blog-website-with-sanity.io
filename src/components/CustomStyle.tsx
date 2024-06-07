import { PortableTextComponents } from "@portabletext/react";

export const customStyle: PortableTextComponents = {
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc marker:text-orange-600 list-inside">
        {children}
      </li>
    ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
        )
    }
};
