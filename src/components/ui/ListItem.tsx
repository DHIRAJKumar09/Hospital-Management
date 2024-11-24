// src/components/ui/ListItem.tsx
const ListItem = ({ children }: { children: React.ReactNode }) => {
    return (
      <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
        {children}
      </li>
    );
  };
  
  export default ListItem;
  