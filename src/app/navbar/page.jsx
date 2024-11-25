


import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger

} from "@radix-ui/react-navigation-menu";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
    return (
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center pt-4">
          {/* Getting Started Dropdown */}
          <NavigationMenuItem >
            <NavigationMenuTrigger className="text-sm font-semibold text-white hover:bg-gray-700 rounded-md px-3 py-2">
              Getting Started
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute z-50 bg-gray-700 p-4 rounded-lg shadow-lg mt-2 w-72 border border-gray-200">
              <ul className="space-y-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:shadow-md focus:shadow-md"
                      href="/"
                    >
                      <div className="text-lg font-medium">shadcn/ui</div>
                      <p className="text-sm text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists, etc.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
          {/* Components Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-semibold text-white hover:bg-gray-700 rounded-md px-3 py-2">
              Components
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute bg-gray-700 p-4 rounded-lg shadow-lg mt-2 w-72 border border-gray-200">
              <ul className="grid gap-4 md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
          {/* Documentation Link */}
          <NavigationMenuItem className="pt-1">
            <Link href="/docs" passHref legacyBehavior>
              <NavigationMenuLink className="text-sm font-semibold text-white hover:bg-gray-700 rounded-md px-3 py-2">
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  
  // ListItem Component
  const ListItem = ({ href, title, children }) => (
    <li className="hover:bg-gray-100 pt-6  rounded-md transition-colors">
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block px-4 py-2 rounded-md hover:text-primary text-sm text-muted-foreground"
        >
          <div className="font-medium">{title}</div>
          <p className="text-xs text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
  