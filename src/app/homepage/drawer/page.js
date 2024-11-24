import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Drawerhome = () => {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="text-gray-100">Register</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex p-6" variant="outline">
            <Button className="p-6 text-2xl bg-yellow-300 font-semibold text-gray-600">Regsiter as Patient</Button>
            <Button className="p-6 text-2xl bg-yellow-300 font-semibold text-gray-600">Register as Doctor</Button>
            <Button className="p-6 text-2xl bg-yellow-300 font-semibold text-gray-600">Register as Staff</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Drawerhome;
