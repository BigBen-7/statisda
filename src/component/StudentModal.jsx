/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function StudentModal({ open, setOpen, addStudent }) {
  const [forms, setForms] = useState([{ id: 1, name: '', email: '', class: '', gender: '' }]);

  const handleInputChange = (index, field, value) => {
    const newForms = [...forms];
    newForms[index][field] = value;
    setForms(newForms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    forms.forEach((form) => {
      if (form.name && form.email && form.class && form.gender) {
        const newStudent = {
          id: Math.random(), // You may want to use a better ID generation method
          name: form.name,
          studentId: `S00${Math.floor(Math.random() * 1000)}`, // Generate an example ID
          class: form.class,
          email: form.email,
          gender: form.gender,
          profilePhoto: "/default-photo.jpg", // Placeholder for now
        };
        addStudent(newStudent); // Add the new student to the list
      }
    });
    setOpen(false); // Close the modal after submission
    setForms([{ id: 1, name: '', email: '', class: '', gender: '' }]); // Reset the form
  };

  const addAnotherForm = () => {
    setForms([...forms, { id: forms.length + 1, name: '', email: '', class: '', gender: '' }]);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-10 py-8 text-left shadow-xl transition-all sm:max-w-4xl sm:w-full">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              {forms.map((form, index) => (
                <div key={form.id} className="space-y-6">
                  <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-1">
                      <div className="text-left">
                        <DialogTitle
                          as="h3"
                          className="md:text-xl text-sm font-bold text-gray-600"
                        >
                          Add Students
                        </DialogTitle>
                      </div>
                    </div>

                    {/* Name, Class, Gender */}
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
                      <input
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                        className="col-span-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      />
                      <select
                        value={form.class}
                        onChange={(e) => handleInputChange(index, 'class', e.target.value)}
                        className="col-span-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      >
                        <option value="">Class</option>
                        <option value="Jss 1">Jss 1</option>
                        <option value="Jss 2">Jss 2</option>
                        <option value="Jss 3">Jss 3</option>
                        <option value="SSS 1">SSS 1</option>
                        <option value="SSS 2">SSS 2</option>
                        <option value="SSS 3">SSS 3</option>
                      </select>
                      <select
                        value={form.gender}
                        onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                        className="col-span-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    {/* Email and Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#509CDB]"
                      />
                    </div>

                    {/* Divider between student entries */}
                    {index < forms.length - 1 && (
                      <hr className="my-6 border-t-2 border-gray-200" />
                    )}
                  </div>
                </div>
              ))}

              {/* Buttons (Add Another and Add Student Buttons) */}
              <div className="flex justify-start md:gap-8 mt-6">
                <button
                  type="button"
                  className="text-[#4F4F4F] font-semibold"
                  onClick={addAnotherForm}
                >
                  <AiOutlinePlusCircle className="inline" />
                  <span className="align-middle pl-[.125rem]">Add another</span>
                </button>

                <button
                  type="submit"
                  className="bg-[#F1F1F1] rounded-md px-3 py-2 text-[#4F4F4F] font-semibold shadow-sm hover:bg-[#e2dede] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Add Student
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
